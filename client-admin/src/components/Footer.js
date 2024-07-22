import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
 
const Footer = () => {
    return (
        <Box>
            <h1
                style={{
                    color: "Grey",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Về chúng tôi</Heading>
                        <FooterLink href="#">
                            Địa chỉ:  Trường Đại học Văn Lang - Cơ sở chính, 69/68 Đ. Đặng Thuỳ Trâm, Phường 13, Bình Thạnh, Hồ Chí Minh 70000
                        </FooterLink>
                        <FooterLink href="#">
                            Hotline: 0123456838
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Chính sách</Heading>
                        <FooterLink href="#">
                        Chính sách vận chuyển
                        </FooterLink>
                        <FooterLink href="#">
                        Chính sách bảo mật
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Liên hệ</Heading>
                        <FooterLink href="#">
                           Facebook
                        </FooterLink>
                        <FooterLink href="#">
                            Zalo
                        </FooterLink>
                        <FooterLink href="#">
                            Instagram
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Trang hoạt động</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
            <h1
                style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Copyright© 2024-2025 FashionSốp.
            </h1>
        </Box>
    );
};
export default Footer;