import { useEffect, useState } from 'react';

const Register = () => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('/register.html');
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

export default Register;
