import React from 'react'
import { BottomLeft, BottomLine, ImageLink, BottomRight, Column, Container, Left, Link, Right, Row, Title } from './styles/Footer'

function Footer() {
    return (<>
        <Container>
            <Left>
                <Row><Title>what happened</Title></Row>
                <Row><Link>[공지] 개인 정보 처리 방침 변경 사전 안내</Link></Row>
                <Row><Link>[공지] 29CM 강남 스토어 영업 종료</Link></Row>
                <Row><Link>[공지] 개인 정보 처리 방침 변경 사전 안내</Link></Row>
                <Row><Link>[공지] iOS 10 이하 버전 지원 중단 안내</Link></Row>
                <Row><Link>[공지] 개인 정보 처리 방침 변경 사전 안내</Link></Row>
            </Left>
            <Right>
                <Column>
                    <Row><Title>about us</Title></Row>
                    <Row><Link>회사 소개</Link></Row>
                    <Row><Link>인재 채용</Link></Row>
                    <Row><Link>상시 할인 혜택</Link></Row>
                </Column>
                <Column>
                    <Row><Title>my order</Title></Row>
                    <Row><Link>내 주문</Link></Row>
                    <Row><Link>주문 배송</Link></Row>
                    <Row><Link>취소 / 교환 / 반품 내역</Link></Row>
                    <Row><Link>상품 리뷰 내역</Link></Row>
                    <Row><Link>증빙 서류 발급</Link></Row>
                </Column>
                <Column>
                    <Row><Title>my acoount</Title></Row>
                    <Row><Link>회원 정보 수정</Link></Row>
                    <Row><Link>회원 등급</Link></Row>
                    <Row><Link>마일리지 현황</Link></Row>
                    <Row><Link>쿠폰</Link></Row>
                </Column>
                <Column>
                    <Row><Title>help</Title></Row>
                    <Row><Link>1 : 1 상담 내역</Link></Row>
                    <Row><Link>상품 Q & A 내역</Link></Row>
                    <Row><Link>공지 사항</Link></Row>
                    <Row><Link>자주하는 질문</Link></Row>
                    <Row><Link>고객의 소리</Link></Row>
                </Column>
            </Right>

        </Container>
        <BottomLine>

            <BottomLeft>
                © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr<br />
                서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
            </BottomLeft>
            <BottomRight>
                <ImageLink src="./images/naver.png"></ImageLink>
                <ImageLink src="./images/fb.png"></ImageLink>
                <ImageLink src="./images/blog.png"></ImageLink>
            </BottomRight>
        </BottomLine>
    </>
    )
}

export default Footer
