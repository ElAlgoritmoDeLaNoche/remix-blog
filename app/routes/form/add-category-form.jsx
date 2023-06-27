import { Form, useActionData } from '@remix-run/react'
import { redirect } from '@remix-run/server-runtime'
import { ButtonPrimary, Input } from '~/components/shared'

export default function AddCategoryForm() {
  return (
    <Form
      method='POST'
      action='/form/add-category-form'
      className='flex flex-col'
    >
      <Input name='title' placeholder='Titulo' className='my-2' />
      <Input name='slug' placeholder='Slug' />

      <ButtonPrimary type='submit' className='mt-3'>
        Crear Categoría
      </ButtonPrimary>
    </Form>
  )
}

export async function action(props) {
  const { } = props
  console.log('ESTAMOS AQUI')
  console.log(props)
  return redirect('/')
}