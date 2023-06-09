import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOrderUser } from "../../../redux/toolkits/orderSlice";
import "./meOrder.scss";
import { convertMoney } from "../../../utils/convertMoney";
import { Link } from "react-router-dom";
import moment from "moment";

const MeOrder = () => {
    const dispatch = useDispatch();

    const { data } = useSelector((state) => state.orderState);
    const orders = data.orders ?? [];
    useEffect(() => {
        const getOrder = async () => {
            try {
                await dispatch(getOrderUser()).unwrap();
            } catch (error) {
                console.log(error.response.data.error);
            }
        };
        getOrder();
    }, []);
    return (
        <div className="col l-10 m-12 c-12 index__profile">
            <>
                <div className="index__profile--heading">
                    <h1 className="index__profile--heading--item">
                        Danh sách đơn hàng
                    </h1>
                </div>
                <div className="wrap__info">
                    {orders.length > 0 ? (
                        <table style={{ width: "100%" }}>
                            <tr
                                style={{
                                    height: "40px",
                                    fontWeight: "500",
                                    fontSize: "13px",
                                    color: "#6c757d",
                                    textTransform: "uppercase",
                                }}
                            >
                                <th style={{ textAlign: "center" }}>Mã đơn</th>{" "}
                                <th style={{ textAlign: "center" }}>
                                    Ngày Mua
                                </th>{" "}
                                <th style={{ textAlign: "center" }}>
                                    Trạng thái
                                </th>{" "}
                                <th style={{ textAlign: "center" }}>
                                    Thành tiền
                                </th>
                            </tr>
                            <>
                                {orders?.map((item, i) => (
                                    <tr
                                        style={{
                                            border: "1px solid rgba(0,0,0,0.1)",
                                        }}
                                    >
                                        <td
                                            style={{
                                                padding: "18px",
                                                paddingRight: "4px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Link
                                                className="text-blue-500 hover:underline"
                                                to={`/myorder/${item._id}`}
                                            >
                                                #{item._id}
                                            </Link>
                                        </td>
                                        <td
                                            style={{
                                                padding: "18px",
                                                paddingRight: "4px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {moment(item.createdAt).format(
                                                "HH:mm DD/MM/YYYY"
                                            )}
                                        </td>
                                        <td
                                            style={{
                                                padding: "18px",
                                                paddingRight: "4px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {item.orderStatus === "PENDING"
                                                ? "Đang xử lý"
                                                : item.orderStatus ===
                                                  "SHIPPING"
                                                ? "Đang giao hàng"
                                                : "Đã nhận hàng"}
                                        </td>
                                        <td
                                            style={{
                                                padding: "18px",
                                                paddingRight: "4px",
                                                textAlign: "center",
                                                color: "red",
                                                fontWeight: "900",
                                            }}
                                        >
                                            {convertMoney(
                                                Math.floor(
                                                    item.totalPrice -
                                                        item.shippingPrice
                                                )
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        </table>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                marginTop: "30px",
                                marginBottom: "30px",
                            }}
                        >
                            <svg
                                data-v-3abf680b=""
                                xmlns="http://www.w3.org/2000/svg"
                                data-name="Layer 1"
                                viewBox="0 0 512 512"
                                width="60"
                                height="60"
                                class=""
                            >
                                <g data-v-3abf680b="" data-name="Group 2">
                                    <path
                                        data-v-3abf680b=""
                                        d="M496 254.18v202.1a23.091 23.091 0 01-23.08 23.09H335.89a23.084 23.084 0 01-23.08-23.09v-202.1a23.076 23.076 0 0123.08-23.08h31.17v.07a17.156 17.156 0 0017.16 17.16h40.37a17.156 17.156 0 0017.16-17.16v-.07h31.17A23.082 23.082 0 01496 254.18zM376.92 382.13v-32.98h-32.97v32.98z"
                                        fill="#f8ec7d"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        d="M367.06 231.1v-1.05a17.156 17.156 0 0117.16-17.16h40.37a17.156 17.156 0 0117.16 17.16v1.12a17.156 17.156 0 01-17.16 17.16h-40.37a17.156 17.156 0 01-17.16-17.16z"
                                        fill="#6fe3ff"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        d="M391.31 140.98v71.91h-7.09a17.156 17.156 0 00-17.16 17.16v1.05h-31.17a23.076 23.076 0 00-23.08 23.08v148.8L203.65 466V249.3l187.64-108.33z"
                                        fill="#c16752"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        fill="#af593c"
                                        d="M203.65 249.3l-95.66-55.23L295.62 85.73h.01l95.66 55.24L203.65 249.3z"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        fill="#6fe3ff"
                                        d="M343.95 349.15h32.97v32.98h-32.97z"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        fill="#af593c"
                                        d="M295.62 85.73L107.99 194.07l-91.97-53.1L203.65 32.63l91.97 53.1z"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        fill="#e48e66"
                                        d="M203.65 249.3V466L16 357.66V140.98l.02-.01 91.97 53.1 95.66 55.23z"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        d="M472.92 224h-24.913a24.532 24.532 0 00-23.417-18H398v-65.02a6.89 6.89 0 00-3.385-6.084l-95.562-55.228-3.279 6.07H296v-.016l3.308-6.054-92.064-53.1a7.085 7.085 0 00-7.047 0L12.642 134.851A7.021 7.021 0 009 140.98v216.68a7 7 0 003.5 6.062l187.65 108.34a6.987 6.987 0 003.5.938 7.343 7.343 0 003.6-.938L306 415.1v41.18A29.643 29.643 0 00335.89 486h137.03A29.8 29.8 0 00503 456.28v-202.1A30.2 30.2 0 00472.92 224zM435 230.05v1.12c0 5.6-4.808 9.83-10.41 9.83h-40.37a9.96 9.96 0 01-10.22-9.9v-1.05A10.129 10.129 0 01384.22 220h40.37A10.3 10.3 0 01435 230.05zm-57.709-89.08L203.65 241.217l-81.661-47.147L295.624 93.81zM203.65 40.713l77.971 45.017L107.99 185.987 30.019 140.97zM23 153.083l174 100.258v200.535L23 353.619zm188 300.793V253.342l173-100.259V206h.22a24.532 24.532 0 00-23.42 18h-24.91A30.038 30.038 0 00306 254.18v144.759zm278 2.4A15.791 15.791 0 01472.92 472H335.89A15.629 15.629 0 01320 456.28v-202.1A16.022 16.022 0 01335.89 238h25.187a23.943 23.943 0 0023.143 17h40.37a23.941 23.941 0 0023.142-17h25.188A16.184 16.184 0 01489 254.18z"
                                        fill="#63316d"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        d="M343.95 325h7.33a7 7 0 000-14H351v-19h19.3a6.739 6.739 0 006.657 4.725A7.021 7.021 0 00384 289.74v-4.71a7.094 7.094 0 00-7.08-7.03h-32.97a6.983 6.983 0 00-6.95 7.03v32.98a6.949 6.949 0 006.95 6.99zM384 349a7 7 0 00-7-7h-33a7 7 0 00-7 7v33a7 7 0 007 7h33a7 7 0 007-7zm-33 7h19v19h-19zM351.28 439H351v-19h18.925a7.04 7.04 0 0014.075.01v-6.74a7.3 7.3 0 00-7.08-7.27h-32.97a7.193 7.193 0 00-6.95 7.27v32.97a6.756 6.756 0 006.95 6.76h7.33a7 7 0 000-14z"
                                        fill="#63316d"
                                    ></path>
                                    <path
                                        data-v-3abf680b=""
                                        d="M393.04 286.59l-20.5 20.5-6.241-6.235a7 7 0 10-9.9 9.9l11.191 11.18a7 7 0 009.9 0l25.45-25.45a7 7 0 10-9.9-9.9zM393.04 415.84l-20.5 20.5-6.241-6.235a7 7 0 10-9.9 9.9l11.191 11.18a7 7 0 009.9 0l25.45-25.45a7 7 0 10-9.9-9.9zM464.86 295h-43.97a7 7 0 000 14h43.97a7 7 0 000-14zM464.86 359h-43.97a7 7 0 000 14h43.97a7 7 0 000-14zM464.86 423h-43.97a7 7 0 000 14h43.97a7 7 0 000-14z"
                                        fill="#63316d"
                                    ></path>
                                </g>
                            </svg>
                            <h3>Chưa có đơn hàng nào</h3>
                        </div>
                    )}
                </div>
            </>
        </div>
    );
};

export default MeOrder;
