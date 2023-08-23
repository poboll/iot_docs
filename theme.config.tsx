import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Iot_docs</span>,
  project: {
    link: 'https://github.com/poboll/wps_script',
  },
  docsRepositoryBase: 'https://github.com/poboll/iot_docs',
}

export default {
    // useNextSeoProps() {
    //     const { asPath } = useRouter()
    //     if (asPath !== '/') {
    //         return {
    //             titleTemplate: '%s – Iot_docs'
    //         }
    //     }
    // },
    footer: {
        text: (
            <span>
            MIT {new Date().getFullYear()} ©{' '}
                <a href="https://www.caiths.com" target="_blank">
            温瞳
    </a>
    .
    </span>
        )
    }
}

