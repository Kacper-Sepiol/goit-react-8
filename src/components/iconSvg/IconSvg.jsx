export const IconSvg = ({ src, width, height }) => {
    return (
        <svg>
            <use href={src} width={width} height={height} />
        </svg>
    );
};
