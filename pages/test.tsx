import { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdown from "../markdown/home.md"

const Test: NextPage = () => {
    return <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
    />
}

export default Test