// 词汇库数据
const vocabularyData = {
    "超市": {
        "characters": [
            { word: "收银员", pinyin: "shōu yín yuán" },
            { word: "导购员", pinyin: "dǎo gòu yuán" },
            { word: "顾客", pinyin: "gù kè" },
            { word: "保安", pinyin: "bǎo ān" },
            { word: "理货员", pinyin: "lǐ huò yuán" }
        ],
        "items": [
            { word: "苹果", pinyin: "píng guǒ" },
            { word: "牛奶", pinyin: "niú nǎi" },
            { word: "面包", pinyin: "miàn bāo" },
            { word: "推车", pinyin: "tuī chē" },
            { word: "购物篮", pinyin: "gòu wù lán" },
            { word: "饼干", pinyin: "bǐng gān" },
            { word: "鸡蛋", pinyin: "jī dàn" },
            { word: "香蕉", pinyin: "xiāng jiāo" }
        ],
        "facilities": [
            { word: "货架", pinyin: "huò jià" },
            { word: "收银台", pinyin: "shōu yín tái" },
            { word: "冷藏柜", pinyin: "lěng cáng guì" },
            { word: "购物袋", pinyin: "gòu wù dài" },
            { word: "电梯", pinyin: "diàn tī" }
        ],
        "environments": [
            { word: "入口", pinyin: "rù kǒu" },
            { word: "出口", pinyin: "chū kǒu" },
            { word: "指示牌", pinyin: "zhǐ shì pái" },
            { word: "玻璃门", pinyin: "bō li mén" },
            { word: "宣传海报", pinyin: "xuān chuán hǎi bào" }
        ]
    },
    "医院": {
        "characters": [
            { word: "医生", pinyin: "yī shēng" },
            { word: "护士", pinyin: "hù shi" },
            { word: "病人", pinyin: "bìng rén" },
            { word: "药剂师", pinyin: "yào jì shī" },
            { word: "急救员", pinyin: "jí jiù yuán" }
        ],
        "items": [
            { word: "听诊器", pinyin: "tīng zhěn qì" },
            { word: "体温计", pinyin: "tǐ wēn jì" },
            { word: "针筒", pinyin: "zhēn tǒng" },
            { word: "药片", pinyin: "yào piàn" },
            { word: "纱布", pinyin: "shā bù" },
            { word: "口罩", pinyin: "kǒu zhào" },
            { word: "病历本", pinyin: "bìng lì běn" },
            { word: "拐杖", pinyin: "guǎi zhàng" }
        ],
        "facilities": [
            { word: "病床", pinyin: "bìng chuáng" },
            { word: "输液架", pinyin: "shū yè jià" },
            { word: "轮椅", pinyin: "lún yǐ" },
            { word: "手术台", pinyin: "shǒu shù tái" },
            { word: "药房", pinyin: "yào fáng" }
        ],
        "environments": [
            { word: "候诊室", pinyin: "hòu zhěn shì" },
            { word: "急诊室", pinyin: "jí zhěn shì" },
            { word: "手术室", pinyin: "shǒu shù shì" },
            { word: "病房", pinyin: "bìng fáng" },
            { word: "挂号处", pinyin: "guà hào chù" }
        ]
    },
    "公园": {
        "characters": [
            { word: "小朋友", pinyin: "xiǎo péng yǒu" },
            { word: "老爷爷", pinyin: "lǎo yé yé" },
            { word: "老奶奶", pinyin: "lǎo nǎi nai" },
            { word: "园丁", pinyin: "yuán dīng" },
            { word: "清洁工", pinyin: "qīng jié gōng" }
        ],
        "items": [
            { word: "风筝", pinyin: "fēng zheng" },
            { word: "皮球", pinyin: "pí qiú" },
            { word: "自行车", pinyin: "zì xíng chē" },
            { word: "冰淇淋", pinyin: "bīng qí lín" },
            { word: "水壶", pinyin: "shuǐ hú" },
            { word: "报纸", pinyin: "bào zhǐ" },
            { word: "气球", pinyin: "qì qiú" },
            { word: "野餐垫", pinyin: "yě cān diàn" }
        ],
        "facilities": [
            { word: "滑梯", pinyin: "huá tī" },
            { word: "秋千", pinyin: "qiū qiān" },
            { word: "长椅", pinyin: "cháng yǐ" },
            { word: "垃圾桶", pinyin: "lā jī tǒng" },
            { word: "凉亭", pinyin: "liáng tíng" }
        ],
        "environments": [
            { word: "花朵", pinyin: "huā duǒ" },
            { word: "草地", pinyin: "cǎo dì" },
            { word: "树木", pinyin: "shù mù" },
            { word: "小路", pinyin: "xiǎo lù" },
            { word: "池塘", pinyin: "chí táng" }
        ]
    },
    "学校": {
        "characters": [
            { word: "老师", pinyin: "lǎo shī" },
            { word: "学生", pinyin: "xué shēng" },
            { word: "校长", pinyin: "xiào zhǎng" },
            { word: "同学", pinyin: "tóng xué" },
            { word: "班长", pinyin: "bān zhǎng" }
        ],
        "items": [
            { word: "课本", pinyin: "kè běn" },
            { word: "铅笔", pinyin: "qiān bǐ" },
            { word: "橡皮", pinyin: "xiàng pí" },
            { word: "书包", pinyin: "shū bāo" },
            { word: "尺子", pinyin: "chǐ zi" },
            { word: "彩笔", pinyin: "cǎi bǐ" },
            { word: "奖状", pinyin: "jiǎng zhuàng" },
            { word: "地球仪", pinyin: "dì qiú yí" }
        ],
        "facilities": [
            { word: "黑板", pinyin: "hēi bǎn" },
            { word: "课桌", pinyin: "kè zhuō" },
            { word: "讲台", pinyin: "jiǎng tái" },
            { word: "操场", pinyin: "cāo chǎng" },
            { word: "图书馆", pinyin: "tú shū guǎn" }
        ],
        "environments": [
            { word: "教室", pinyin: "jiào shì" },
            { word: "走廊", pinyin: "zǒu láng" },
            { word: "校门", pinyin: "xiào mén" },
            { word: "操场", pinyin: "cāo chǎng" },
            { word: "宣传栏", pinyin: "xuān chuán lán" }
        ]
    },
    "动物园": {
        "characters": [
            { word: "饲养员", pinyin: "sì yǎng yuán" },
            { word: "游客", pinyin: "yóu kè" },
            { word: "小朋友", pinyin: "xiǎo péng yǒu" },
            { word: "讲解员", pinyin: "jiǎng jiě yuán" },
            { word: "摄影师", pinyin: "shè yǐng shī" }
        ],
        "items": [
            { word: "熊猫", pinyin: "xióng māo" },
            { word: "大象", pinyin: "dà xiàng" },
            { word: "长颈鹿", pinyin: "cháng jǐng lù" },
            { word: "猴子", pinyin: "hóu zi" },
            { word: "老虎", pinyin: "lǎo hǔ" },
            { word: "狮子", pinyin: "shī zi" },
            { word: "企鹅", pinyin: "qǐ é" },
            { word: "袋鼠", pinyin: "dài shǔ" }
        ],
        "facilities": [
            { word: "笼子", pinyin: "lóng zi" },
            { word: "观景台", pinyin: "guān jǐng tái" },
            { word: "休息区", pinyin: "xiū xi qū" },
            { word: "售票处", pinyin: "shòu piào chù" },
            { word: "指示牌", pinyin: "zhǐ shì pái" }
        ],
        "environments": [
            { word: "假山", pinyin: "jiǎ shān" },
            { word: "水池", pinyin: "shuǐ chí" },
            { word: "树木", pinyin: "shù mù" },
            { word: "草坪", pinyin: "cǎo píng" },
            { word: "小路", pinyin: "xiǎo lù" }
        ]
    }
};

// API配置
const API_BASE_URL = 'https://api.kie.ai/api/v1/jobs';
let currentApiKey = null;
let currentTaskId = null;
let pollInterval = null;

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    // 从localStorage恢复API密钥
    const savedApiKey = localStorage.getItem('nano_api_key');
    if (savedApiKey) {
        document.getElementById('apiKey').value = savedApiKey;
        updateApiKeyStatus(true);
    }
});

// 更新API密钥状态
function updateApiKeyStatus(hasKey) {
    const indicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');

    if (hasKey) {
        indicator.classList.add('active');
        statusText.textContent = 'API密钥已配置';
    } else {
        indicator.classList.remove('active');
        statusText.textContent = '未配置API密钥';
    }
}

// 监听API密钥输入
document.getElementById('apiKey').addEventListener('input', (e) => {
    const apiKey = e.target.value.trim();
    if (apiKey) {
        localStorage.setItem('nano_api_key', apiKey);
        currentApiKey = apiKey;
        updateApiKeyStatus(true);
    } else {
        localStorage.removeItem('nano_api_key');
        currentApiKey = null;
        updateApiKeyStatus(false);
    }
});

// 测试API连接
async function testApiKey() {
    const apiKey = document.getElementById('apiKey').value.trim();

    if (!apiKey) {
        showMessage('apiErrorMessage', '请先输入API密钥');
        return;
    }

    try {
        // 创建一个简单的测试任务
        const response = await fetch(`${API_BASE_URL}/createTask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'nano-banana-pro',
                input: {
                    prompt: 'test',
                    aspect_ratio: '1:1',
                    resolution: '1K',
                    output_format: 'png'
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.code === 200) {
                showMessage('apiSuccessMessage', 'API密钥验证成功！');
                updateApiKeyStatus(true);
            } else {
                showMessage('apiErrorMessage', `API错误: ${data.msg}`);
            }
        } else if (response.status === 401) {
            showMessage('apiErrorMessage', 'API密钥无效，请检查');
        } else if (response.status === 402) {
            showMessage('apiErrorMessage', '账户余额不足，请充值');
        } else {
            showMessage('apiErrorMessage', `连接失败: ${response.status}`);
        }
    } catch (error) {
        showMessage('apiErrorMessage', '网络错误，请检查网络连接');
    }
}

// 生成提示词
function generatePrompt(scene, title) {
    const vocab = vocabularyData[scene];

    const formatVocabList = (list, limit = 5) => {
        return list.slice(0, limit)
            .map(item => `${item.pinyin} ${item.word}`)
            .join(', ');
    };

    return `请生成一张儿童识字小报《${scene}》，竖版 A4，学习小报版式，适合 5–9 岁孩子 认字与看图识物。

# 一、小报标题区（顶部）

**顶部居中大标题**：《${title}》
* **风格**：十字小报 / 儿童学习报感
* **文本要求**：大字、醒目、卡通手写体、彩色描边
* **装饰**：周围添加与 ${scene} 相关的贴纸风装饰，颜色鲜艳

# 二、小报主体（中间主画面）

画面中心是一幅 **卡通插画风的「${scene}」场景**：
* **整体气氛**：明亮、温暖、积极
* **构图**：物体边界清晰，方便对应文字，不要过于拥挤。

**场景分区与核心内容**
1.  **核心区域 A（主要对象）**：表现 ${scene} 的核心活动。
2.  **核心区域 B（配套设施）**：展示相关的工具或物品。
3.  **核心区域 C（环境背景）**：体现环境特征（如墙面、指示牌等）。

**主题人物**
* **角色**：1 位可爱卡通人物（职业/身份：与 ${scene} 匹配）。
* **动作**：正在进行与场景相关的自然互动。

# 三、必画物体与识字清单（Generated Content）

**请务必在画面中清晰绘制以下物体，并为其预留贴标签的位置：**

**1. 核心角色与设施：**
${formatVocabList([...vocab.characters, ...vocab.facilities])}

**2. 常见物品/工具：**
${formatVocabList(vocab.items, 8)}

**3. 环境与装饰：**
${formatVocabList(vocab.environments)}

*(注意：画面中的物体数量不限于此，但以上列表必须作为重点描绘对象)*

# 四、识字标注规则

对上述清单中的物体，贴上中文识字标签：
* **格式**：两行制（第一行拼音带声调，第二行简体汉字）。
* **样式**：彩色小贴纸风格，白底黑字或深色字，清晰可读。
* **排版**：标签靠近对应的物体，不遮挡主体。

# 五、画风参数
* **风格**：儿童绘本风 + 识字小报风
* **色彩**：高饱和、明快、温暖 (High Saturation, Warm Tone)
* **质量**：8k resolution, high detail, vector illustration style, clean lines.`;
}

// 生成图片
async function generateImage() {
    const apiKey = document.getElementById('apiKey').value.trim();
    const scene = document.getElementById('scene').value;
    const title = document.getElementById('title').value.trim();

    // 验证输入
    if (!apiKey) {
        showMessage('apiErrorMessage', '请先输入API密钥');
        return;
    }

    if (!scene) {
        showMessage('apiErrorMessage', '请选择一个场景');
        return;
    }

    if (!title) {
        showMessage('apiErrorMessage', '请输入小报标题');
        return;
    }

    // 生成提示词
    const prompt = generatePrompt(scene, title);
    currentApiKey = apiKey;

    // 显示加载状态
    showLoading();

    try {
        // 创建任务
        const response = await fetch(`${API_BASE_URL}/createTask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'nano-banana-pro',
                input: {
                    prompt: prompt,
                    image_input: [],
                    aspect_ratio: '3:4',
                    resolution: '2K',
                    output_format: 'png'
                }
            })
        });

        const data = await response.json();
        console.log('创建任务的响应:', data);

        if (data.code === 200) {
            currentTaskId = data.data.taskId;
            console.log('任务ID已保存:', currentTaskId);
            updateProgress(20);
            updateLoadingStatus('任务创建成功，正在生成...');
            document.getElementById('taskIdDisplay').textContent = `任务ID: ${currentTaskId}`;

            // 开始轮询任务状态
            startPolling();
        } else {
            console.error('创建任务失败:', data);
            throw new Error(data.msg || '创建任务失败');
        }
    } catch (error) {
        hideLoading();
        showMessage('apiErrorMessage', `生成失败: ${error.message}`);
    }
}

// 开始轮询任务状态
function startPolling() {
    let retryCount = 0;
    const maxRetries = 30;

    console.log('开始轮询任务ID:', currentTaskId);
    updateLoadingStatus('任务创建成功，正在轮询结果...');

    pollInterval = setInterval(async () => {
        try {
            console.log(`轮询第 ${retryCount + 1} 次...`);
            const response = await fetch(`${API_BASE_URL}/recordInfo?taskId=${currentTaskId}`, {
            headers: {
                'Authorization': `Bearer ${currentApiKey}`
            }
        });

            console.log('响应状态:', response.status);
            const data = await response.json();

            console.log('响应数据:', data);

            if (data.code === 200) {
                const state = data.data.state;
                console.log('任务状态:', state);
                console.log('完整数据:', JSON.stringify(data.data, null, 2));

                if (state === 'success') {
                    console.log('任务成功！');
                    updateProgress(100);

                    try {
                        const resultJson = JSON.parse(data.data.resultJson);
                        console.log('解析的结果:', resultJson);

                        if (resultJson && resultJson.resultUrls && resultJson.resultUrls.length > 0) {
                            const imageUrl = resultJson.resultUrls[0];
                            console.log('图片URL:', imageUrl);
                            updateLoadingStatus('图片生成成功，正在加载...');
                            showResult(imageUrl);
                            clearInterval(pollInterval);
                        } else {
                            console.error('结果中没有找到图片URL');
                            throw new Error('生成的结果中没有找到图片URL');
                        }
                    } catch (parseError) {
                        console.error('解析结果JSON失败:', parseError);
                        console.log('原始resultJson:', data.data.resultJson);
                        throw new Error('解析生成结果失败');
                    }
                } else if (state === 'fail') {
                    console.error('任务失败:', data.data.failMsg);
                    throw new Error(data.data.failMsg || '生成失败');
                } else {
                    // 更新进度
                    retryCount++;
                    const progress = Math.min(20 + (retryCount * 2), 90);
                    updateProgress(progress);
                    updateLoadingStatus(`生成中... 状态: ${state} (${retryCount}/${maxRetries})`);
                }
            } else {
                console.error('API返回错误:', data);
                retryCount++;
                updateLoadingStatus(`API错误，重试中... (${retryCount}/${maxRetries})`);
            }
        } catch (error) {
            console.error('轮询出错:', error);
            clearInterval(pollInterval);
            hideLoading();
            showMessage('apiErrorMessage', `查询失败: ${error.message}`);
        }

        if (retryCount >= maxRetries) {
            clearInterval(pollInterval);
            hideLoading();
            showMessage('apiErrorMessage', '任务超时，请重试');
        }
    }, 3000);
}

// 更新词汇预览
function updateVocabularyPreview() {
    const scene = document.getElementById('scene').value;
    const preview = document.getElementById('vocabularyPreview');
    const list = document.getElementById('vocabularyList');

    if (!scene || !vocabularyData[scene]) {
        preview.style.display = 'none';
        return;
    }

    const vocab = vocabularyData[scene];
    let html = '';

    const allWords = [
        ...vocab.characters,
        ...vocab.items,
        ...vocab.facilities,
        ...vocab.environments
    ];

    allWords.forEach(item => {
        html += `
            <div class="vocabulary-item">
                <div class="pinyin">${item.pinyin}</div>
                <div class="word">${item.word}</div>
            </div>
        `;
    });

    list.innerHTML = html;
    preview.style.display = 'block';
}

// 显示加载状态
function showLoading() {
    document.getElementById('loadingContainer').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    updateProgress(10);
    updateLoadingStatus('准备中...');
}

function hideLoading() {
    document.getElementById('loadingContainer').style.display = 'none';
    document.getElementById('taskIdDisplay').textContent = '';
    clearInterval(pollInterval);
}

function updateProgress(percent) {
    document.getElementById('progressFill').style.width = percent + '%';
}

function updateLoadingStatus(text) {
    document.getElementById('loadingStatus').textContent = text;
}

// 显示结果
function showResult(imageUrl) {
    hideLoading();
    const resultImage = document.getElementById('resultImage');

    // 添加图片加载事件监听
    resultImage.onload = function() {
        document.getElementById('resultContainer').style.display = 'block';
        // 滚动到结果区域
        document.getElementById('resultContainer').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    resultImage.onerror = function() {
        console.error('图片加载失败:', imageUrl);
        // 尝试通过代理加载图片
        loadImageThroughProxy(imageUrl);
    };

    // 设置图片源
    resultImage.src = imageUrl;
}

// 通过代理加载图片
async function loadImageThroughProxy(imageUrl) {
    try {
        // 创建一个canvas来代理加载图片
        const img = new Image();
        img.crossOrigin = 'anonymous';

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // 转换为blob并显示
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const resultImage = document.getElementById('resultImage');
                resultImage.src = url;
                resultImage.onload = function() {
                    URL.revokeObjectURL(url);
                    document.getElementById('resultContainer').style.display = 'block';
                    document.getElementById('resultContainer').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                };
            }, 'image/png');
        };

        img.onerror = function() {
            // 如果还是失败，显示备用方案
            showImageFallback(imageUrl);
        };

        // 添加时间戳防止缓存
        img.src = imageUrl + (imageUrl.includes('?') ? '&' : '?') + 't=' + Date.now();
    } catch (error) {
        console.error('代理加载失败:', error);
        showImageFallback(imageUrl);
    }
}

// 显示备用方案
function showImageFallback(imageUrl) {
    const resultContainer = document.getElementById('resultContainer');
    const resultImage = document.getElementById('resultImage');

    // 创建一个包含图片链接的容器
    const fallbackDiv = document.createElement('div');
    fallbackDiv.style.padding = '20px';
    fallbackDiv.style.background = '#f8f9fa';
    fallbackDiv.style.borderRadius = '8px';
    fallbackDiv.style.textAlign = 'center';

    fallbackDiv.innerHTML = `
        <p style="margin-bottom: 15px; color: #666;">图片无法直接显示，请通过以下方式查看：</p>
        <a href="${imageUrl}" target="_blank" style="display: inline-block; padding: 10px 20px; background: #667eea; color: white; text-decoration: none; border-radius: 4px; margin-bottom: 10px;">
            在新窗口打开图片
        </a>
        <br>
        <button onclick="downloadImageFromUrl('${imageUrl}')" style="padding: 10px 20px; background: #52c41a; color: white; border: none; border-radius: 4px; cursor: pointer;">
            下载图片
        </button>
        <p style="margin-top: 15px; font-size: 12px; color: #999;">图片链接: <span style="word-break: break-all;">${imageUrl}</span></p>
    `;

    // 隐藏原始图片，显示备用方案
    resultImage.style.display = 'none';
    resultContainer.appendChild(fallbackDiv);
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 下载图片
async function downloadImage() {
    const imageUrl = document.getElementById('resultImage').src;
    const title = document.getElementById('title').value.trim() || '识字小报';

    // 如果图片是blob URL，不能直接下载
    if (imageUrl.startsWith('blob:')) {
        showMessage('apiErrorMessage', '请使用下方按钮下载图片');
        return;
    }

    await downloadImageFromUrl(imageUrl, title);
}

// 从URL下载图片
async function downloadImageFromUrl(imageUrl, title = null) {
    if (!title) {
        title = document.getElementById('title').value.trim() || '识字小报';
    }

    try {
        // 创建下载链接
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = `${title}.png`;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        showMessage('apiSuccessMessage', '图片下载已开始，请查看浏览器下载列表');
    } catch (error) {
        showMessage('apiErrorMessage', '下载失败，请右键图片另存为');
    }
}

// 重置表单
function resetForm() {
    document.getElementById('scene').value = '';
    document.getElementById('title').value = '';
    document.getElementById('vocabularyPreview').style.display = 'none';

    // 清理结果容器
    const resultContainer = document.getElementById('resultContainer');
    const resultImage = document.getElementById('resultImage');

    // 移除可能存在的fallback div
    const existingFallback = resultContainer.querySelector('div[style*="padding: 20px"]');
    if (existingFallback) {
        existingFallback.remove();
    }

    // 重置图片显示
    resultImage.style.display = 'block';
    resultImage.src = '';

    resultContainer.style.display = 'none';
    hideLoading();
    clearMessages();
}

// 清空所有
function clearAll() {
    resetForm();
    document.getElementById('apiKey').value = '';
    localStorage.removeItem('nano_api_key');
    currentApiKey = null;
    updateApiKeyStatus(false);
    clearMessages();
}

// 显示消息
function showMessage(elementId, message) {
    clearMessages();
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';

    // 自动隐藏成功消息
    if (elementId === 'apiSuccessMessage') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    }
}

// 清除所有消息
function clearMessages() {
    document.getElementById('apiSuccessMessage').style.display = 'none';
    document.getElementById('apiErrorMessage').style.display = 'none';
}

// 导出函数供HTML调用
window.testApiKey = testApiKey;
window.generateImage = generateImage;
window.downloadImage = downloadImage;
window.downloadImageFromUrl = downloadImageFromUrl;
window.resetForm = resetForm;
window.clearAll = clearAll;
window.updateVocabularyPreview = updateVocabularyPreview;