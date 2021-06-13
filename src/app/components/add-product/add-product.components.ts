import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService, ImageService } from 'src/app/services';
import { Controller } from 'swiper';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})

export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  get form() { return this.addProductForm.controls; }

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private productService: ProductService,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      department : ['men', Validators.required],
      category : ['jeansPant', Validators.required],
      title : ['', Validators.required],
      styleNo : ['', Validators.required],
      color : ['', Validators.required],
      price : ['', Validators.required],
      description : ['', Validators.required],
      washDetails : this.fb.group({
        destroyed : [''],
        whiskers : [''],
        wrinkles : [''],
        faded : [''],
      }),
      images : this.fb.group({
        frontImage : ['', Validators.required],
        backImage : ['', Validators.required],
        sizeChart : ['', Validators.required],
        Img1 : [''],
        Img2 : ['']
      }),
      fabricDetails : this.fb.group({
        type : ['', Validators.required],
        content : ['', Validators.required],
        stretchbility : ['stretch', Validators.required]
      }),
      sizes : this.fb.array([
        this.fb.control('', Validators.required)
      ]),
      quantity : this.fb.array([
        this.fb.control('', Validators.required)
      ])
    })
  }

  get sizes() { return this.addProductForm.get('sizes') as FormArray }
  get quantity() { return this.addProductForm.get('quantity') as FormArray }

  uploadImages(){
    const data = {
      styleNo: this.addProductForm.controls['styleNo'].value,
      images : this.addProductForm.controls['images'].value
    }
    // const uploadedImages = this.addProductForm.controls['images'].value;
    const response = this.imageService.uploadImage(data);
  }

  addSize(){
    this.sizes.push(this.fb.control('', Validators.required));
    this.quantity.push(this.fb.control('', Validators.required));
  }

  AddProduct = () => {
    const data = this.addProductForm.value;
    // console.log(data);
    const res = this.productService.addProduct(data).then((res)=> {
      if(res.message.indexOf('E11000') > -1){
        this.addProductForm.get('styleNo')?.setErrors;
      }
      if(res.type === 'success') {
        this.uploadImages();
        // this.route.navigate(['/']);
      }
    });
  }

}
