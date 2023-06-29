import React,{useEffect,useState,useRef} from 'react'
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";

import './DashboardMSlide.scss'


const DashboardMSlide = () => {
  
    const { loading } = useSelector((state) => state.orderState);
    
    const [slides, setSlides] = useState([]);
    
    const columns = [
        {
            name: "Ảnh",
            selector: (row) => {
                return (
                    <img
                        style={{
                            width: "70px",
                            height: "70px",
                            marginTop: "10px",
                            marginBottom: "10px",
                        }}
                        src={row?.images[0]?.url}
                        alt=""
                    />
                );
            },
            style: (row) => ({ flex: "unset", width: "150px" }),
        },
        {
            name: "Tên ảnh",
            selector: (row) => row.name.toString(),
            sortable: true,
            style: (row) => ({ flex: "unset", width: "340px" }),
        },
        {
            name: "hiển thị",
            selector: (row) => (
                <div className="action--box">
                    <input type="radius" checked/>
                </div>
            ),
            sortable: true,
        },
        {
            name: "Chức năng",
            selector: (row) => (
                <div className="action--item">
                    <button
                        className="btn"
                        style={{ backgroundColor: "#169c9f" }}
                        onClick={() => {
                            // history(`/dashboard/update/product/${row._id}`);
                        }}
                    >
                        Sửa
                    </button>
                    <button
                        className="btn"
                        style={{ backgroundColor: "#169c9f" }}
                        onClick={() => {
                            // handleDeleteProduct(row);
                        }}
                    >
                        Xóa
                    </button>
                </div>
            ),
        },
    ];
    return (
    <div className="slider">
        <div className="filter">
            <h3>TÌM KIẾM :</h3>
            <div className="form-group col-md-4">
                <input 
                    className="form-control rounded-0 py-2" 
                    type="search" 
                    // value="search" 
                    placeholder='search ...'
                    id="search-input"
                />
            </div>
            {/* <div className="dropdown">
                <button 
                    className="dropbtn"
                    >Dropdown</button>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> */}
            <button className="create-new">
                <div className="form">
                    <i className="fa-solid fa-plus"></i>
                    THÊM MỚI
                </div>
            </button>
        </div>
        <DataTable
            title="Danh sách sản phẩm"
            style={{flexDirection:'wrap',padding:'10px 0',margin:'10px'}}
            columns={columns}
            data={slides}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="500px"
            selectableRows
            selectableRowsHighlight={false}
            // onSelectedRowsChange={handleSelectedChange}
            // actions={
            //     <div>
            //         <button
            //             className="btn"
            //             style={{ backgroundColor: "#169c9f" }}
            //             // onClick={handleDeleteMutiple}
            //         >
            //             Xóa ({}){" "}
            //         </button>
            //     </div>
            // }
        />
        {loading && <Loader />}
    </div>
  )
}

export default DashboardMSlide