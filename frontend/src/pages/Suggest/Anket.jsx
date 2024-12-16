import React, { useState } from 'react';
import axios from '../../axios';

const Anket = () => {
    const [formData, setFormData] = useState({
        question1: { price1: false, price2: false, price3: false, price4: false, price5: false },
        question2: { option1: false, option2: false, option3: false, option4: false, option5: false, option6: false },
        question3: { option1: false, option2: false, option3: false, option4: false, option5: false },
        question4: { option1: false, option2: false, option3: false, option4: false, option5: false },
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);

        const anketData = {
            price: [],
            favoriteFoods: [],
            favoriteFlavor: [],
            allergies: [],
        };

        // Collect selected price ranges
        if (formData.question1.price1) anketData.price.push('price_15-20');
        if (formData.question1.price2) anketData.price.push('price_25-50');
        if (formData.question1.price3) anketData.price.push('price_50-100');
        if (formData.question1.price4) anketData.price.push('price_100-150');
        if (formData.question1.price5) anketData.price.push('price_151');

        // Collect selected favorite foods
        if (formData.question2.option1) anketData.favoriteFoods.push('food_pho');
        if (formData.question2.option2) anketData.favoriteFoods.push('food_banhmi');
        if (formData.question2.option3) anketData.favoriteFoods.push('food_salad');
        if (formData.question2.option4) anketData.favoriteFoods.push('food_fastfood');
        if (formData.question2.option5) anketData.favoriteFoods.push('food_grilled');
        if (formData.question2.option6) anketData.favoriteFoods.push('food_rice');

        // Collect selected favorite flavors
        if (formData.question3.option1) anketData.favoriteFlavor.push('flavor_sour');
        if (formData.question3.option2) anketData.favoriteFlavor.push('flavor_spicy');
        if (formData.question3.option3) anketData.favoriteFlavor.push('flavor_salty');
        if (formData.question3.option4) anketData.favoriteFlavor.push('flavor_sweet');
        if (formData.question3.option5) anketData.favoriteFlavor.push('flavor_balanced');

        // Collect selected allergies
        if (formData.question4.option1) anketData.allergies.push('ingre_sea');
        if (formData.question4.option2) anketData.allergies.push('ingre_eggs');
        if (formData.question4.option3) anketData.allergies.push('ingre_dairy');
        if (formData.question4.option4) anketData.allergies.push('ingre_meat');
        if (formData.question4.option5);

        try{
            const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            if (userInfo) {
                anketData.userId = userInfo.id;
            } else {
                setError("User information not found. Please log in.");
                return;
            }
        } catch (err) {
            console.error('Failed to get user information');
            setError("Failed to get user information. Please log in.");
            return;
        }

        try{
            const response = await axios.post("/suggest/anket", anketData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                console.log('Anket created:', response.data);
                setSuccess("Anket created successfully!");
                setError(null);
                setFormData({
                    question1: { price1: false, price2: false, price3: false, price4: false, price5: false },
                    question2: { option1: false, option2: false, option3: false, option4: false, option5: false, option6: false },
                    question3: { option1: false, option2: false, option3: false, option4: false, option5: false },
                    question4: { option1: false, option2: false, option3: false, option4: false, option5: false },
                });
            }
        } catch (err) {
            console.error('Failed to create anket');
            setError("Failed to create anket. Please try again.");
            setSuccess(null);
        }
    };
    /*
    Price range: 1: 15-20k, 2: 25-50k, 3: 50-100k, 4:100-150k, 5: 150k+
    Favorite foods: 1: Pho, 2: Banh mi, 3: Salad, 4: Fast foods, 5: Grilled food, 6: Rice
    Favorite flavor: 1: Sour, 2: Spicy, 3: Salty, 4: Sweet, 5: Balanced
    Allergies/disliked: 1: Seafood, 2: Eggs, 3: Milk, 4: Meat, 5: None
    */
    const handleCancel = () => {
        setFormData({
            question1: { price1: false, price2: false, price3: false, price4: false, price5: false },
            question2: { option1: false, option2: false, option3: false, option4: false, option5: false, option6: false },
            question3: { option1: false, option2: false, option3: false },
            question4: { option1: false, option2: false, option3: false },
        });
    };

    const handleChange = (e) => {
        const { name, checked } = e.target;
        const [question, option] = name.split('.');
        
        if (question === 'question4' && option === 'option5' && checked) {
            setFormData({
                ...formData,
                question4: {
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                    option5: true,
                },
            });
        } else if (question === 'question4') {
            setFormData({
                ...formData,
                question4: {
                    ...formData.question4,
                    [option]: checked,
                    option5: false,
                },
            });
        } else {
            setFormData({
                ...formData,
                [question]: {
                    ...formData[question],
                    [option]: checked,
                },
            });
        }
    };

    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
            <p style={{ textAlign: 'center', fontSize: '70px'}}><strong>メニュー提案画面</strong></p>
            <p style={{textAlign: 'center', fontSize: '20px'}}>こちらは、あなたに楽しんでいただける料理のコレクション</p>
            <form onSubmit={handleSubmit} encType="multipart/anket-data" style={{ backgroundColor: 'lightgray', width: '100%' }}>
                <h1 style={{ textAlign: 'center' }}><strong>アンケート</strong></h1>
                <div style={{ paddingLeft: '50px', width: '100%', paddingTop: '25px' }}>
                    <label><h5><strong>希望する料理の価値帯</strong></h5></label>
                    <div className="options" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '20px', width: '100%', paddingTop: '5px', fontSize: '18px' }}>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question1.price1"
                                checked={formData.question1.price1}
                                onChange={handleChange}
                            />
                            15 - 20k
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question1.price2"
                                checked={formData.question1.price2}
                                onChange={handleChange}
                            />
                            25 - 50k
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question1.price3"
                                checked={formData.question1.price3}
                                onChange={handleChange}
                            />
                            50 - 100k
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question1.price4"
                                checked={formData.question1.price4}
                                onChange={handleChange}
                            />
                            100 - 150k
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question1.price5"
                                checked={formData.question1.price5}
                                onChange={handleChange}
                            />
                            150k以上
                        </label>
                    </div>
                </div>
                <div style={{ paddingLeft: '50px', width: '100%', paddingTop: '25px' }}>
                    <label><h5><strong>好きな料理は何ですか</strong></h5></label>
                    <div className="options" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '20px', width: '100%', paddingTop: '5px' }}>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option1"
                                checked={formData.question2.option1}
                                onChange={handleChange}
                            />
                            フォー
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option2"
                                checked={formData.question2.option2}
                                onChange={handleChange}
                            />
                            バインミー
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option3"
                                checked={formData.question2.option3}
                                onChange={handleChange}
                            />
                            サラダ
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option4"
                                checked={formData.question2.option4}
                                onChange={handleChange}
                            />
                            ファストフード
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option5"
                                checked={formData.question2.option5}
                                onChange={handleChange}
                            />
                            焼き物
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question2.option6"
                                checked={formData.question2.option6}
                                onChange={handleChange}
                            />
                            ご飯
                        </label>
                    </div>
                </div>
                <div style={{ paddingLeft: '50px', width: '100%', paddingTop: '25px' }}>
                    <label><h5><strong>お好みの味</strong></h5></label>
                    <div className="options" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '20px', width: '100%', paddingTop: '5px', fontSize: '18px' }}>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question3.option1"
                                checked={formData.question3.option1}
                                onChange={handleChange}
                            />
                            酸っぱい
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question3.option2"
                                checked={formData.question3.option2}
                                onChange={handleChange}
                            />
                            辛い
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question3.option3"
                                checked={formData.question3.option3}
                                onChange={handleChange}
                            />
                            塩辛い
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question3.option4"
                                checked={formData.question3.option4}
                                onChange={handleChange}
                            />
                            甘い
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question3.option5"
                                checked={formData.question3.option5}
                                onChange={handleChange}
                            />
                            バランスの取れた味
                        </label>
                    </div>
                </div>
                <div style={{ paddingLeft: '50px', width: '100%', paddingTop: '25px' }}>
                    <label><h5><strong>以下の成分にアレルギーがありますか、それとも制限していますか？</strong></h5></label>
                    <div className="options" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', paddingLeft: '20px', width: '100%', paddingTop: '5px', fontSize: '18px' }}>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question4.option1"
                                checked={formData.question4.option1}
                                onChange={handleChange}
                            />
                            海鮮
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question4.option2"
                                checked={formData.question4.option2}
                                onChange={handleChange}
                            />
                            卵
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question4.option3"
                                checked={formData.question4.option3}
                                onChange={handleChange}
                            />
                            牛乳
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question4.option4"
                                checked={formData.question4.option4}
                                onChange={handleChange}
                            />
                            肉
                        </label>
                        <label style={{ flex: '1 1 150px' }}>
                            <input
                                type="checkbox"
                                name="question4.option5"
                                checked={formData.question4.option5}
                                onChange={handleChange}
                            />
                            ありません
                        </label>
                    </div>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', display: 'flex', justifyContent: 'center', gap: '10px', width: '100%' }}>
                    <button type="button" onClick={handleCancel} style={{ borderRadius: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'gray', color: 'white'}}>CANCEL</button>
                    <button type="submit" onClick={handleSubmit} style={{ borderRadius: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white'}}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Anket;
