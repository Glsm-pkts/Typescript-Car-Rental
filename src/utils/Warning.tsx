// Higher Order Components (HOC)
// diğer componentleri prop alan componentler
//normal componentlerden farklı olarak hem açılış hem kapanış etiketlerine sahip 
type Props = {
    children: string
}


const Warning = ({children}: Props) => {
    return <div>{children}</div>
}

export default Warning;