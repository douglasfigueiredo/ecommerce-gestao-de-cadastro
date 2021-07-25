import { useState, FormEvent, useEffect } from 'react';
import { ContentForm, Form } from '../styles'
import { Link } from "react-router-dom";

interface Customer {
	name: string;
	email: string;
	birthday: string;
	document: string;
	phone: string;
  street: string;
  addressNumber: number;
  city: string;
  addressState: string;
  country: string;
  zipCode: string;
}

const Clientes = () => {
 
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [document, setDocument] = useState('');
  const [phone, setPhone] = useState('');
  
  const [street, setStreet] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [city, setCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  let customer:Customer;

  function handleCreateNewCustomer(event: FormEvent) {
    event.preventDefault();
    
    customer = {
      name,
      email,
      birthday,
      document,
      phone,
      street,
      addressNumber:parseInt(addressNumber),
      city,
      addressState,
      country,
      zipCode,
    };
    
    setCustomers( [...customers, customer]);
    
    setName("");
    setEmail("");
    setBirthday("");
    setDocument("");
    setPhone("");
    setStreet("");
    setAddressNumber("");
    setCity("");
    setAddressState("");
    setCountry("");
    setZipCode("");
  }

  useEffect(()=>{
    localStorage.setItem('@customers', JSON.stringify(customers))
  },[customers]);
  
  return (
      <ContentForm>
       <Form onSubmit={handleCreateNewCustomer}>
       <div className="head-form">
          <h2>Dados do produto</h2>
          <Link to="/" className="btn-previous">Voltar</Link>;
         </div>
        <input 
          required
          name="name" 
          placeholder="Nome" 
          value={name}
          onChange={event=>setName(event.target.value)}
        />
        <input 
          required
          type="email"
          name="email" 
          placeholder="E-mail" 
          value={email}
          onChange={event=>setEmail(event.target.value)}
        />
        <input 
          name="birthday" 
          placeholder="Data de nascimento" 
          value={birthday}
          onChange={event=>setBirthday(event.target.value)}
        />
         <input 
          required
          name="document" 
          placeholder="CPF" 
          value={document}
          onChange={event=>setDocument(event.target.value)}
        />
         <input 
          required
          name="phone" 
          placeholder="Nº Celular" 
          value={phone}
          onChange={event=>setPhone(event.target.value)}
        />

        <h2>Dados de Endereço</h2>
        <input 
          required
          name="street" 
          placeholder="Rua/Av" 
          value={street}
          onChange={event=>setStreet(event.target.value)}
        />
         <input 
          required
          name="addressNumber" 
          placeholder="Número" 
          value={addressNumber}
          onChange={event=>setAddressNumber(event.target.value)}
        />
        <input 
          required
          name="city" 
          placeholder="Cidade" 
          value={city}
          onChange={event=>setCity(event.target.value)}
        />
        <input 
          required
          name="addressState" 
          placeholder="Estado" 
          value={addressState}
          onChange={event=>setAddressState(event.target.value)}
        />
        <input 
          name="country" 
          placeholder="País" 
          value={country}
          onChange={event=>setCountry(event.target.value)}
        />
        <input 
          required
          name="zipCode" 
          placeholder="CEP" 
          value={zipCode}
          onChange={event=>setZipCode(event.target.value)}
        />
        <button type="submit">
          CADASTRAR
        </button>
      </Form>
    </ContentForm>
  );
}

export default Clientes;
