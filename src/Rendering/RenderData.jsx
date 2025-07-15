function RenderData(){
    const products = [
  { id: 1, name: "Nike Shoes", price: 2999 },
  { id: 2, name: "Adidas T-Shirt", price: 1499 },
  { id: 3, name: "Puma Jacket", price: 3499 },
  { id: 4, name: "Reebok Shorts", price: 999 },
  { id: 5, name: "Under Armour Cap", price: 799 },
  { id: 6, name: "New Balance Socks", price: 499 },
  { id: 7, name: "Asics Running Shoes", price: 3999 },
  { id: 8, name: "Fila Backpack", price: 1999 },
  { id: 9, name: "Skechers Sandals", price: 1299 },
  { id: 10, name: "Converse Sneakers", price: 2499 },
  { id: 11, name: "Converse Sneakers", price: 2499 },
  { id: 12, name: "Converse Sneakers", price: 2499 },
  { id: 13, name: "Converse Sneakers", price: 2499 },
  { id: 14, name: "Converse Sneakers", price: 2499 },
  { id: 15, name: "Converse Sneakers", price: 2499 },
  { id: 16, name: "Converse Sneakers", price: 2499 }
];
    return(
        <div>
            <div>
                <h1>List rendering</h1>
                <ul>
                    {products.map((product,index)=>(
                       <li key={index}>
                        {product.id}-------{product.name},{product.price}
                        </li> 
                    ))}
                </ul>
            </div>
            <div>
                <h1>Table Rendering</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>CART</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>(
                            <tr key={product.id}>
                                <td>
                                    {product.id}
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    <button>Add cart</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                {products.map((product)=>(
                    <div key={product.id}
                    style={{
                        border:'2px solid black',
                        borderRadius:'5px',
                        padding:'3px',
                        margin:'2px',
                        width:'150px',
                        backgroundColor:'orange'
                    }}>
                        <h1>{product.name}</h1>
                        <p>₹{product.price}</p>
                        <button>Add Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default RenderData;