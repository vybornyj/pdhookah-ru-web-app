import { NextPage } from 'next'
import { Rent2 } from 'src/components/pages-blocks-rent/Rent2'
import { Rent3 } from 'src/components/pages-blocks-rent/Rent3'
import { Rent4ReasonsToOrder } from 'src/components/pages-blocks-rent/Rent4ReasonsToOrder'
import { Rent5MakeCallOrder } from 'src/components/pages-blocks-rent/Rent5MakeCallOrder'
import { Rent6BestDecision } from 'src/components/pages-blocks-rent/Rent6BestDecision'
import { Rent7OurBenifits } from 'src/components/pages-blocks-rent/Rent7OurBenifits'
import { Rent8DoItYourself } from 'src/components/pages-blocks-rent/Rent8DoItYourself'
import { Rent9HowItWorks } from 'src/components/pages-blocks-rent/Rent9HowItWorks'
import { Template } from 'src/components/template/Template'

const Page: NextPage = () => (
  <Template title='Аренда и доставка кальяна на дом' type='rent'>
    <Rent2 />
    <Rent3 />
    <Rent4ReasonsToOrder />
    <Rent5MakeCallOrder />
    <Rent6BestDecision />
    <Rent7OurBenifits />
    <Rent8DoItYourself />
    <Rent9HowItWorks />
  </Template>
)

export default Page
