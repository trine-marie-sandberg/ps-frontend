import { FlexWraper, FlexWraperSpaceB } from "./style";

export default function FlexWrap({children}) {
    return(
        <FlexWraper>{children}</FlexWraper>
    )
}
export function FlexWrapSpaceB({children}) {
    return(
        <FlexWraperSpaceB>{children}</FlexWraperSpaceB>
    )
}