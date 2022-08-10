import dynamic from 'next/dynamic'
import React from 'react'

const DisableSSR = (props: { children: React.ReactNode }) => (
    <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(DisableSSR), {
    ssr: false
})