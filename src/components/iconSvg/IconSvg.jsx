export const IconSvg = ({ src, width, height }) => {
    return (
        <svg style={{ backgroundColor: "red" }} width={width} height={height}>
            <use
                xlinkHref="../../icons/icons.svg#icon-menu"
                style={{ fill: "purple" }}
            />
        </svg>
    );
};
