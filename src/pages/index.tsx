import { Box, Container } from '@chakra-ui/react'
import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import Product from '../components/Product'
import { useAppDispatch, useAppSelector } from '../hooks/reduxhooks'
import Layout from '../layout/Layout'
import { clickCategory, getCategory } from '../store/slices/categoryslice'
interface Props {
  categorys: {}[]
}
const Home = () => {
  const dispatch = useAppDispatch()
  const { category, selectedCategory } = useAppSelector(
    (state) => state.category
  )

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  useEffect(() => {
    dispatch(clickCategory(category[0]?.id))
  }, [category])

  return (
    <Layout pagina={`Menú ${selectedCategory?.name}`}>
      <h1 className='text-4xl font-black'>{selectedCategory?.name}</h1>
      <p className='text-2xl my-10'>
        Elige personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {selectedCategory?.products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categorys = await prisma.category.findMany()

//   return {
//     props: {
//       categorys
//     }
//   }
// }
