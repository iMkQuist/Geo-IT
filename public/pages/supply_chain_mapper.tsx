import { useEffect, useState } from 'react';

const SupplyChainMapper = () => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/supply_chain_mapper.html');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Failed to fetch content:', error);
            }
        };

        fetchContent();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default SupplyChainMapper;
