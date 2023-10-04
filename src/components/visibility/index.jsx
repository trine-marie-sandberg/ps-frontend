export default function SetVisibility({children, show}) {

    return(
        <>
            {show === true && children}
        </>
    )
}