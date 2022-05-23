import { CashService } from "../../cash.js";
import { ProductService } from "../../product.js";

class ProductController {
    constructor() {}

    /**
     * 상품 구매
     */
    static buy = (req, res) => {
        const body = req.body;

        // 가진 돈을 검증하는 코드
        const cashService = new CashService();
        const hasMoney = cashService.hasMoney();

        // 제품이 품절되었는지 검증하는 코드
        const productService = new ProductService();
        const isSoldout = productService.isSoldout();

        // 상품을 구매하는 코드
        if (hasMoney && !isSoldout) {
            res.send("상품 구매가 완료되었습니다.");
        } else {
            res.send("상품 구매를 실패하였습니다....");
        }
    };

    /**
     * 상품 환불
     */
    static refund = (req, res) => {
        const body = req.body;

        // 제품이 품절되었는지 검증하는 코드
        const productService = new ProductService();
        const isSoldout = productService.isSoldout();

        // 상품을 환불하는 코드
        if (isSoldout) {
            res.send("상품 환불이 완료되었습니다.");
        } else {
            res.send("상품 환불을 실패하였습니다....");
        }
    };
}

export default ProductController;
