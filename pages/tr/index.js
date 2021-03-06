// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_'
import ns0 from '../../locales/tr/cases.json'
import ns1 from '../../locales/tr/measures.json'
import ns2 from '../../locales/tr/faq.json'
import ns3 from '../../locales/tr/symptoms.json'
import ns4 from '../../locales/tr/footer.json'
import ns5 from '../../locales/tr/seo.json'

const namespaces = { 'cases': ns0, 'measures': ns1, 'faq': ns2, 'symptoms': ns3, 'footer': ns4, 'seo': ns5 }

export default function Page(p){
  return (
    <I18nProvider lang="tr" namespaces={namespaces} isStaticMode>
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

export * from '../../pages_'
