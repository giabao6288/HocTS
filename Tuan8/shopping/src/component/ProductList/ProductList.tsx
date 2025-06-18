import {useState, useEffect} from 'react';
import {getAllProducts, getCategories, getProductsByCategory} from '../../Services/ApiService/productApi';
import {Product} from '../../types/product';
import {Row, Card, Col, Select, Input, Pagination, Button, Space} from 'antd'; 

const {Option} = Select;
const {Search} = Input;
type Props ={
        onViewDetail:(id:number) => void;
        onAddToCart: (product:Product) => void;
};

type Category={
    slug:string;
    name:string;
    url:string;
}


const ProductList = ({onViewDetail,onAddToCart}: Props) => {
    const [products,setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] =useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=5;
    const [sortOption, setSortOption] = useState<string>('default');

    useEffect(() => {
        getAllProducts().then(setProducts);
        getCategories().then((data)=>{
            setCategories(data);
        });
        setCurrentPage(1);
    },[sortOption]);

    useEffect(() =>{
        setCurrentPage(1);
        if(selectedCategory==='all'){
            getAllProducts().then(setProducts);
        }else{
            getProductsByCategory(selectedCategory).then(setProducts);
        }
    },[selectedCategory]);
    const filteredProducts = products.filter((prod)=>
        prod.title.toLowerCase().includes(searchTerm.toLowerCase())   
    );
    
    const sortedProduct = [...filteredProducts].sort((a,b)=> {
        switch (sortOption){
            case 'priceAsc':
                return a.price -b.price;
            case 'priceDesc': 
                return b.price-a.price;
            case 'nameAsc': 
                return a.title.localeCompare(b.title)
            case 'nameDesc':
                return b.title.localeCompare(a.title);
            default:return 0;
        }
    })

    const currentProducts = sortedProduct.slice((currentPage-1)*itemsPerPage, currentPage * itemsPerPage);
    

    return (
        
        <div style={{padding:'24px'}}>
            <Space style={{marginBottom:20}} wrap>
                    <label>Lọc theo loại: </label>
                    <Select value={selectedCategory} onChange={(value) => setSelectedCategory(value)} style={{width:150}}>
                        <Option value="all">---- Tất cả ----</Option>
                        {Array.isArray(categories) && categories.map(cat =>(
                            <Option key={cat.slug} value={cat.slug}>{cat.name}</Option>
                        ))}
                    </Select>
                    <Search
                        type="text"
                        placeholder="Tìm sản phẩm..."
                        value={searchTerm}
                        onChange={(e) =>{
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        style={{width:300}}
                    />
            </Space>

                <div className="sort-bar">
                    <label>Sắp xếp: </label>
                    <Select value={sortOption} onChange={(value) => setSortOption(value)}>
                        <Option value="default">-- Mặc định --</Option>
                        <Option value="priceAsc">Giá tăng dần</Option>
                        <Option value="priceDesc">Giá giảm dần</Option>
                        <Option value="nameAsc">A → Z</Option>
                        <Option value="nameDesc">Z → A</Option>
                    </Select>
                </div>
            <Row gutter={[16,16]}>
                    {currentProducts.map((prod) =>(
                        <Col key={prod.id} xs={24} sm={12} md={8} lg={6}>
                           <div style={{height:'100%'}}>
                                <Card 
                                    hoverable
                                    style={{height:'100%', display:'flex', flexDirection:'column',justifyContent:'space-between'}}
                                    cover={<img alt={prod.title} src={prod.thumbnail} height={300} width={200} style={{objectFit:'cover'}}/>}
                                    actions={[
                                        <Button type="link" onClick={() => onViewDetail(prod.id)}>Xem chi tiết</Button>,
                                        <Button type="primary" onClick={() => onAddToCart(prod)}>Mua Ngay</Button>
                                    ]}
                                >
                                    <Card.Meta
                                        title={prod.title} style={{textAlign:'center'}}
                                        description={<span style={{color:'#e74c3c', fontWeight:'bold'}}>{prod.price}$</span>}
                                    />
                                </Card>
                           </div>
                        </Col>
                    ))}
            </Row>
            <Pagination
                current={currentPage}
                total={sortedProduct.length}
                pageSize={itemsPerPage}
                onChange={(page) => setCurrentPage(page)}
                style={{marginTop:30, justifyContent:'center'}}
            />
        </div>
    );
};

export default ProductList;

