import { useSelector } from "react-redux"

export const ProgressBar = ({type}) => {
    const progress = useSelector((state) => state.topic.topics);

    return (
        <>
        {
            progress?.filter((item) => item?.type == type)?.map((item) => (
                <div key={item?.title} style={{
                    background: "",
                    width: "100%",
                    height: "10px",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}>
                    <div style={{
                        background: item?.type=="weakest"? "":"",
                        width: `${item?.value}`,
                        height: "100%",
                    }}></div>
                </div>
            ))
        }
        </>
    )
}