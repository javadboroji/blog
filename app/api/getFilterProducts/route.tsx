import connectMongoDB from "@/app/Libs/Mongodb";
import { NextRequest, NextResponse } from "next/server";
import Products from "@/app/Moudles/EcceomerceProducts";

interface ProductsFilter {
    searchTerm: string
    category: string
    price: number[]
    sorting: string
}
export async function POST(req: NextRequest) {

    const { searchTerm, category, price, sorting }: ProductsFilter = await req.json()
    try {
        await connectMongoDB();

        const products =await fetchProduct(searchTerm,category);
        console.log(products,'products');
        
        return NextResponse.json({
            code: 200,
            message: '',
            data: products
        })

    }
    catch (error) {
        return NextResponse.json({ code: 500, message: error })
    }

    async function fetchProduct(searchTerm?: string, category?: string, price?: string, sorting?: string) {
        const AllProducts = await Products.find();
        
        
        let filterProducts = AllProducts
        
        if (searchTerm) {
         
            filterProducts= filterProducts.filter((product) =>{

              return  product.title.includes(searchTerm)
              
            }
            )
          
            
        }
        if(category){
            filterProducts=filterProducts.filter((product)=>{
                return product.category===category
            })
        }
      return  filterProducts
    }
}