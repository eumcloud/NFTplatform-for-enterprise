# NFTplatform-for-enterprise
    
**Project Consult (0528)**

-   기간
    -   2022.06.02~2022.06.30
    
-   요구사항 확인 1 (해**)
    -   NFT+Defi 프로그램
    -   NFT 자산 생성 / 참여자 스테이킹 보상
    -   PFP 아트 생성, NFT 발행(민팅), NFT 스테이킹, 토큰 Reward 제공

-   요구사항 확인 2 (메타**)
	-  회원 가입 :  지갑을 이용하여 회원 가입 한다.이 때 추가로 닉네임과 이메일을 입력 받는다.
	-  판매물품 등록 및 NFT 발행 : NFT에는 판매하려는 디자인 사진 링크, 브랜드 이름 등이 포함된 json metadata의 주소를 담고 있다.
	- 저작물 페이지 : 저작물 정보를 확인 하고 경매 / 구매 가능 
	    - 평가시스템 및 5star리뷰 시스템 
	    -  즉시 판매 : 판매자는 등록한 디자인 NFT를 정찰가에 즉시 판매 할 수 있다.구매자는 본인의 주소를 입력하여 상대방에게 자신의 주소를 전달 해야 한다.  
	    - White and black list 구축
	- 경매 : 
	    - 판매자는 등록한 NFT를 경매를 통해 판매 할 수 있다. 이 경우 최초 경매가와 경매 마감 시간을 입력해야 하며, 입찰 참여자가 있을 경우 경매 마감 시간을 연장 할 수 있는 옵션을 제공 한다.     
	    - 경매 참여 : 경매에 참여 한다. 이는 스마트 컨트랙을 통해 수행 된다.최종 경매 참여가 보다 높은 금액을 지불하여 경매를 참여 한다.경매에서 낙찰되는 경우, 경매 금액은 스마트 컨트랙트를 통해 모두 판매자에게 송금된다. 
	- 유저 페이지 : 판매자가 판매 중인 NFT 확인 / 구매자가 구매 한 NFT 확인 / 유저가 참여중인 경매 정보 
        - 지갑 연결 :  지갑 연결 (메타메스크, Kaikas)
	    - 마이 페이지 : 회원 정보 관리
	- 교환 토큰 표준 : ARC20 
	- 배포 : Acent Mainnet
    - Acent NFT Marketplace 프로토콜
        - dApp
        - UI
        - 스마트컨트랙트
        - Wallet
        - SDK
    - 블록스캔 (트랜잭션 추적)
    - 모바일 통합시스템
    ---
-   사용 기술 
    -   Solidity
        -   ERC20 (or KIP-7)
        -   ERC721 (or KIP-721)
        -   web3js (caver-js or ethers)
        -   Kaikas (or Metamask)
    -   Nodejs / Truffle
    -   Reactjs (or Nextjs)
    -   Typescript / javascript
    
    -   IPFS
    -   GCP (Google Cloud Platform)
    
- 개발환경 및 이슈관리 1
    - 이슈관리 : Trello
    - 문서관리 : Notion
    - 형상관리 : Github
    
- 개발환경 및 이슈관리 2
    - 빌드환경 : Linux, Truffle, Bitbucket Pipeline, Docker, Nodejs, Webpack.
    - 이슈관리 : Jira, Trello
    - 문서관리 : Docy, Google Docs, Github wiki, Confluence, notion, fivery
    - 형상관리 : Bitbucket, Github, Netlify, Vercel, Gitpage
    
-   설계(작성중)
