import { FormEvent, useEffect, useState } from "react";
import { ContentForm, Form } from "../styles";
import { Link } from "react-router-dom";


interface Product {
	sku: string;
	name: string;
	category: string;
	price: string;
  quantity: number;
	description: string;
}

const Products = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  
  let product:Product;

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();
    
    product = {
      sku,
      name,
      category,
      price,
      quantity: parseInt(quantity),
      description,
    };
    
    setProducts( [...products, product]);
    
    setSku("");
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setDescription("");
  }

  useEffect(()=>{
    localStorage.setItem('@products', JSON.stringify(products))
  },[products]);
  
  return (
      <ContentForm>
       <Form onSubmit={handleCreateNewProduct}>
         <div className="head-form">
          <h2>Dados do produto</h2>
          <Link to="/" className="btn-previous">Voltar</Link>;
         </div>
        <input 
          required
          name="sku" 
          placeholder="Código sku" 
          value={sku}
          onChange={event=>setSku(event.target.value)}
        />
        <input 
          required
          name="name" 
          placeholder="Nome" 
          value={name}
          onChange={event=>setName(event.target.value)}
        />
        <input 
          name="category" 
          placeholder="Categoria" 
          value={category}
          onChange={event=>setCategory(event.target.value)}
        />
         <input 
          required
          name="price" 
          placeholder="Valor R$" 
          value={price}
          onChange={event=>setPrice(event.target.value)}
        />
         <input 
          required
          name="quantity" 
          placeholder="Quantidade" 
          value={quantity}
          onChange={event=>setQuantity(event.target.value)}
        />
        <input 
          required
          name="description" 
          placeholder="Descrição" 
          value={description}
          onChange={event=>setDescription(event.target.value)}
        />
        <button type="submit">
          CADASTRAR
        </button>
      </Form>
    </ContentForm>
  );
}

export default Products;
