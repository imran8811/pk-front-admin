import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})

export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;

  get form() { return this.addProductForm.controls; }

  constructor(private route: Router, private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      department : ['Men', Validators.required],
      category : ['jeansPant', Validators.required],
      title : ['', Validators.required],
      styleNo : ['', Validators.required],
      color : ['', Validators.required],
      prices : this.fb.group({
        samplePrice : ['', Validators.required],
        lessThan100 : ['', Validators.required],
        regularPrice : ['', Validators.required]
      }),
      description : ['', Validators.required],
      washDetails : this.fb.group({
        destroyed : [''],
        whiskers : [''],
        wrinkles : [''],
        faded : [''],
      }),
      fabricDetails : this.fb.group({
        type : ['', Validators.required],
        content : ['', Validators.required],
        stretchbility : ['', Validators.required]
      }),
      images : this.fb.group({
        frontImage : ['', Validators.required],
        backImage : ['', Validators.required],
        sizeChart : ['', Validators.required],
        Img1 : ['', Validators.required],
        Img2 : ['', Validators.required],
      })
    })
  }

  AddProduct = () => {
    const data = this.addProductForm.value;
    console.log(data);
    const res = this.productService.addProduct(data).then((res)=> {
      if(res.message.indexOf('E11000') > -1){
        this.addProductForm.get('styleNo')?.setErrors;
      }
      if(res.type === 'success') {
        this.route.navigate(['/']);
      }
    });
  }

}
