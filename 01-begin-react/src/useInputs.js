import {useState, useCallback} from 'react';

function useInputs (initialForm){
    // 인자로 전달받은 form 을 초기값으로 상태를 만든다.
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    // deps 배열에 initialForm 을 넣어야 한다!
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
};

export default useInputs;