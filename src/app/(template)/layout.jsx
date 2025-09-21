import "@/styles/style.css"
import { Layout } from "@/components/template/Layout"

export default function TemplateLayout(props) {
    return (
        <Layout>
            {props.children}
        </Layout>
    );
}