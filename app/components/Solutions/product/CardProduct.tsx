"use client";

import * as S from "./styles";

interface IProduct {
    title: string;
    image: string[];
    imageBanner: string;
    description: string;
    descriptionTwo?: string;
    descriptionThree?: string;
    descriptionFour?: string;
    descriptionFive?: string;
    descriptionSix?: string;
    descriptionSeven?: string;
    descriptionEight?: string;
    descriptionList?: string[];
    contact?: string;
}

const CardProduct = ({ productData }: { productData: IProduct }) => {

    const renderDescription = (description: string) => {
        const parts = description.split(/(\*\*.*?\*\*)/g); // Dividir em partes, incluindo delimitadores. **

        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>; // Remover os ** e colocar em negrito.
            }
            return part; // Deixar o resto do texto como está.
        });
    };

    return (
        <>

            <S.Container>
                <S.Card>
                    <S.TextContainer>

                        <S.CardTitle>{productData.title}</S.CardTitle>
                        <S.OrangeBar />

                        <S.Description>{renderDescription(productData.description)}</S.Description>


                        {
                            productData.descriptionTwo && (
                                <S.Description>{renderDescription(productData.descriptionTwo)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionThree && (
                                <S.Description>{renderDescription(productData.descriptionThree)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionFour && (
                                <S.Description>{renderDescription(productData.descriptionFour)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionFive && (
                                <S.Description>{renderDescription(productData.descriptionFive)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionSix && (
                                <S.Description>{renderDescription(productData.descriptionSix)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionSeven && (
                                <S.Description>{renderDescription(productData.descriptionSeven)}</S.Description>
                            )
                        }

                        {
                            productData.descriptionEight && (
                                <S.Description>{renderDescription(productData.descriptionEight)}</S.Description>
                            )
                        }

                        {
                            productData.contact && (
                                <>
                                    <S.Contact>{productData.contact} </S.Contact>
                                    <S.ContactLink>comercial@opensolutions.net.br</S.ContactLink>
                                </>
                            )
                        }
                        <S.DescriptionList>
                            {productData.descriptionList && Array.isArray(productData.descriptionList) &&
                                productData.descriptionList.map((item: string, index: number) => (
                                    <li key={index}>{renderDescription(item)}</li>
                                ))
                            }
                        </S.DescriptionList>
                    </S.TextContainer>

                </S.Card>


            </S.Container>

        </>
    )
}

export default CardProduct;