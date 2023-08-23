import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

export default {
    logo: <span>Iot_docs</span>,
    project: {
        link: 'https://www.github.com',
    },
    docsRepositoryBase: 'https://www.caiths.com',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Iot_docs'
        }
    },
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

