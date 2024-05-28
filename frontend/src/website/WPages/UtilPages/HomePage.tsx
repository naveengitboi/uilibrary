import { AnchorTag, HugeHeading, Para, SubHeading } from "../../../Global"
import { HomePageDiv, HomePageHeader } from "../Styled/HomePage"

const HomePage:React.FC = () => {  

    return (
        <HomePageDiv>
            <HomePageHeader>
                <HugeHeading>GitBoiUi</HugeHeading>
                <SubHeading>React UI Library</SubHeading>
                <Para >Get Started</Para>
                <AnchorTag as="a" href="www.github.com">GitHub</AnchorTag>
            </HomePageHeader>
        </HomePageDiv>
    )
}


export default HomePage