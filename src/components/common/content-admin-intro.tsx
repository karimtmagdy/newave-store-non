
type ContentIntroProps = {
  title?: string
  description?: string

}

const ContentAdminIntro = ({ title, description, }: ContentIntroProps) => {
  return (<div>

    <h1 className=" text-3xl font-bold tracking-tight">{title}</h1>
    <p className="text-muted-foreground">{description}</p>
  </div>)
}
export default ContentAdminIntro