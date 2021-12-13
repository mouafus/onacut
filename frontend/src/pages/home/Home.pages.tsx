import React, { useEffect } from "react";
import "react-modern-drawer/dist/index.css";
import { MyDrawer } from "../../components/drawer/Drawer.component";
import { LANGUAGE } from "../../constants/language";
import { StreetMap } from "../streetMap/StreetMap.page";
import bolt from "../../assets/img/bolt.png";
import { Link } from "react-router-dom";
import { HomeModal } from "../homeModal/HomeModal.pages";

export const Home = () => {
    useEffect(() => {
        document.title = LANGUAGE.home.title;
    });
    return (
        <div className="site h-screen">
            <HomeModal />
            <div className="fixed z-10 px-4 md:px-20 pt-5 md:pt-0">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <MyDrawer justify="start" />
                        <div className="site__btn-panne md:ml-20 bg-ind px-2 rounded-3xl mt-3 py-2 ml-4">
                            <Link to="/lists">
                                <p
                                    style={{
                                        fontFamily:
                                            " 'Varela Round', sans-serif",
                                    }}
                                    className="flex px-4 py-2 text-gray-200"
                                >
                                    <img
                                        src={bolt}
                                        alt=""
                                        className="w-6 h-6 mr-2"
                                    />
                                    {LANGUAGE.home.panne}
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 z-10 px-4 md:px-20 pb-4 ">
                <div className="container mx-auto">
                    <div className="site__btn-panne md:ml-20 bg-ind px-2 rounded-3xl mt-3 py-1 ml-4">
                        <p
                            style={{
                                fontFamily: " 'Varela Round', sans-serif",
                            }}
                            className="flex px-4 py-1 text-gray-200"
                        >
                            <img src={bolt} alt="" className="w-6 h-6 mr-2" />
                            Signaler une panne de courant
                        </p>
                    </div>
                </div>
            </div>
            <main className="site__main">
                <StreetMap />
            </main>
        </div>
    );
};
