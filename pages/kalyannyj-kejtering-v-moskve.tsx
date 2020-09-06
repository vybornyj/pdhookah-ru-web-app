import { NextPage } from 'next'
import { Catering2HookahCatering } from 'src/components/pages-blocks-catering/Catering2HookahCatering'
import { Catering3EventCalculate } from 'src/components/pages-blocks-catering/Catering3EventCalculate'
import { Catering4Order } from 'src/components/pages-blocks-catering/Catering4Order'
import { Catering5EventOrganize } from 'src/components/pages-blocks-catering/Catering5EventOrganize'
import { Catering6AreaDecoration } from 'src/components/pages-blocks-catering/Catering6AreaDecoration'
import { Catering7BenefitsWork } from 'src/components/pages-blocks-catering/Catering7BenefitsWork'
import { Catering8DeliveryHookahs } from 'src/components/pages-blocks-catering/Catering8DeliveryHookahs'
import { Template } from 'src/components/template/Template'

const Page: NextPage = () => (
  <Template title='Кальянный кейтеринг в Москве' type='catering'>
    <Catering2HookahCatering />
    <Catering3EventCalculate />
    <Catering4Order />
    <Catering5EventOrganize />
    <Catering6AreaDecoration />
    <Catering7BenefitsWork />
    <Catering8DeliveryHookahs />
  </Template>
)

export default Page
