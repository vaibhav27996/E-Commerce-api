# **E-COMMERCE API**

* The aim is that we have to store the product with field name and quantity in database using postmen api with the help of CRUD operation.

 * for testing , you will have to run on your local system and following are the step
    * Download the zip from git repository
    * Added into the local system
    * Now you have to connect mongodb to check the data is insert in db or not
    * So connect the mongodb and start the server
    * After  the starting server ,open postmen to perform crud oprtion .
    * With the help of following url can play with postmen to get right details and check the database simultinously 
 
 * for **Add** product url- http://localhost:3000/api/v1/products/createProduct  

  ![image](https://user-images.githubusercontent.com/119880818/227716960-ef8ae541-ea6c-4ecd-8af5-26f37143bd59.png)
  
  
  #
  
  * for **read** product url- http://localhost:3000/api/v1/products
  
  ![Read](https://user-images.githubusercontent.com/119880818/227717197-5f3285bc-267f-4d45-9910-4b67dc13b655.PNG)

  #
  
  * for **update** product url - http://localhost:3000/api/v1/products/641ee67315855a1d2bda6095/update-quantity?number=3
  
  ![Update](https://user-images.githubusercontent.com/119880818/227717284-45fc7df1-4359-4ae6-a259-2abd1bb51eee.PNG)

  # 
  
  
  for **delete** product url - http://localhost:3000/api/v1/products/delete-product/641ee67315855a1d2bda6095 <---- Product id
  
  ![Delete](https://user-images.githubusercontent.com/119880818/227717387-b397b024-b0f6-4012-a58e-37df03775820.PNG)
