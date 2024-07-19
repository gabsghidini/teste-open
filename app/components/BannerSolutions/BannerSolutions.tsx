"use client";
import * as S from "./styles";


interface BannerSolutionsProps {
    imageBanner: string;
}

const BannerSolutions = ({ imageBanner }: BannerSolutionsProps) => {
    return (
        <>
            <S.Section $imageBanner={imageBanner}>

                <S.Container>
                </S.Container>

            </S.Section>
        </>

    )
}


export default BannerSolutions;