import { MDXProvider } from "@mdx-js/react";
import { NextPage } from "next";

const components = {

}

const Test: NextPage = () => {
    return <MDXProvider components={components}>
        {/* <Markdown /> */}
    </MDXProvider>
}

export default Test