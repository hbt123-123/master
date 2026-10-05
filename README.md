# Master · AI 命理分析系统

融合现代算法与传统命理文化的 AI 智能分析平台。提供八字、紫微、六爻、塔罗等多维度分析服务，无需注册，即刻体验。

## 功能模块

| 模块 | 说明 |
|------|------|
| 八字分析 | 基于出生信息推演五行结构，AI 解读命盘 |
| 每日运势 | 根据日期和个人信息提供当日策略建议 |
| 合婚分析 | 双方信息匹配，AI 关系建议 |
| 事业合作 | 合伙人/搭档协作潜力分析 |
| 婆媳关系 | 代际关系观察与沟通建议 |
| 知己分析 | 朋友关系契合度与互动建议 |
| 八字关系图谱 | 核心人物与关系对象的图谱评分 |
| 梅花易数 | 结合当天节律的决策方向 |
| 六爻占卜 | 输入问题与日期，自动给出变化线与策略 |
| 塔罗占卜 | 自动抽牌，AI 解释行动方向 |
| 紫微斗数 | 自动排盘，AI 宫位解读 |
| 紫微合婚 | 双人紫微盘对照分析 |
| 黄历查询 | 当日宜忌与 AI 建议 |

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填写你的 API Key

# 启动服务
npm start
```

访问 `http://localhost:8000/service/bazi`

### 环境变量配置

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `LLM_API_KEY` | AI API 密钥 | 必填 |
| `LLM_BASE_URL` | AI API 地址 | `https://coding.dashscope.aliyuncs.com/v1` |
| `LLM_MODEL` | AI 模型 | `qwen3.5-plus` |
| `LLM_PROTOCOL` | 协议类型 | `openai` |
| `LLM_TIMEOUT_SEC` | 超时时间（秒） | `8` |

### 部署到 Netlify

1. Fork 本仓库到 GitHub
2. 在 Netlify 导入项目
3. 配置环境变量（Site Settings → Environment Variables）
4. 自动部署

## 项目结构

```
master/
├── src/
│   ├── routes/api.js      # Express API 路由
│   ├── services/          # 核心业务逻辑
│   │   ├── ai.js          # AI 分析层
│   │   ├── bazi.js        # 八字计算
│   │   ├── marriage.js    # 关系分析
│   │   ├── divination.js  # 占卜模块
│   │   └── ziwei.js       # 紫微斗数
│   └── utils/             # 工具函数
├── netlify/functions/     # Netlify Functions
├── static/                # 前端静态资源
├── templates/             # HTML 模板
├── data/                  # 数据文件
├── server.js              # Express 服务入口
└── netlify.toml           # Netlify 配置
```

## 技术栈

- **后端**: Node.js + Express
- **前端**: 原生 HTML/CSS/JavaScript
- **AI**: 兼容 OpenAI/Anthropic 协议的大语言模型
- **部署**: Netlify Functions
- **农历计算**: lunar-javascript

## 注意事项

- 本项目仅用于体验与自我觉察，不构成现实决策依据
- AI 分析结果仅供参考，请理性看待
