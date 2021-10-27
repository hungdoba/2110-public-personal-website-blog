import React, { useState } from "react";
import {
    Container,
    ContentDiv,
    ImageDiv,
    Image,
    TitleDiv,
    Title,
    Content,
} from "./element";

import defaultPhoto from "../../images/default.jpg";

const PostUnit = (post, { language }) => {
    const [photoSrc, setPhotoSrc] = useState(
        "https://drive.google.com/uc?export=view&id=" + post.post.tinyPhoto
    );

    const setDefaultImage = () => {
        setPhotoSrc(defaultPhoto);
    };

    return (
        <Container to={`/post/${post.post._id}`}>
            <ImageDiv>
                <Image
                    alt="article-title-photo"
                    onError={setDefaultImage}
                    src={photoSrc}
                />
            </ImageDiv>
            <TitleDiv>
                <Title>
                    {language === "ja"
                        ? post.post.titleJa
                        : language === "vi"
                        ? post.post.titleVi
                        : post.post.titleEn}
                </Title>
            </TitleDiv>
            <ContentDiv>
                <Content>
                    {new Date(post.post.updatedAt).toLocaleDateString()}
                </Content>
            </ContentDiv>
        </Container>
    );
};

export default PostUnit;
