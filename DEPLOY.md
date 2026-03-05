# 🚀 部署说明

## 创建 GitHub 仓库并部署

### 方法一：使用 GitHub CLI（推荐）

```bash
# 1. 安装 GitHub CLI（如果未安装）
brew install gh

# 2. 登录 GitHub
gh auth login

# 3. 创建仓库
cd /Users/niuniu/.openclaw/workspace-main/godot4-csharp-learning
gh repo create godot4-csharp-learning --public --source=. --push

# 4. 启用 GitHub Pages
# 访问 https://github.com/niuniu/godot4-csharp-learning/settings/pages
# 选择 Source: GitHub Actions
```

### 方法二：手动创建

1. **创建仓库**
   - 访问 https://github.com/new
   - 仓库名：`godot4-csharp-learning`
   - 可见性：Public
   - 不要初始化 README（我们已经有本地文件）
   - 点击 "Create repository"

2. **推送代码**
   ```bash
   cd /Users/niuniu/.openclaw/workspace-main/godot4-csharp-learning
   git remote add origin https://github.com/niuniu/godot4-csharp-learning.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**
   - 访问仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 等待部署完成（约 1-2 分钟）
   - 访问生成的 URL：https://niuniu.github.io/godot4-csharp-learning

## 网站内容

网站已包含以下页面：

- **index.html** - 首页，包含知识体系大纲和学习建议
- **basics.html** - 基础教程页面，6 个基础课程
- **advanced.html** - 进阶内容页面，8 个高级主题
- **projects.html** - 实战项目页面，6 个完整项目

## 知识体系大纲

```
Godot 4 C# 知识体系
├── 第一阶段：基础入门（6 课）
│   ├── Godot 4 编辑器界面与工作流程
│   ├── C# 语言基础回顾
│   ├── 节点与场景系统
│   ├── 内置类型与 Godot API
│   ├── 输入处理与用户交互
│   └── 2D 游戏开发基础
│
├── 第二阶段：核心技能（6 课）
│   ├── 信号（Signal）系统详解
│   ├── 资源（Resource）管理
│   ├── 动画系统（AnimationPlayer）
│   ├── 物理系统与碰撞检测
│   ├── UI 界面设计与控制
│   └── 音频系统
│
├── 第三阶段：进阶提升（8 课）
│   ├── 设计模式在 Godot 中的应用
│   ├── 性能优化技巧
│   ├── 自定义资源与编辑器插件
│   ├── 网络与多人游戏
│   ├── 着色器基础
│   └── 跨平台发布
│
└── 第四阶段：实战项目（6 个）
    ├── 2D 平台跳跃游戏
    ├── 3D 第一人称探索
    ├── 回合制战斗系统
    ├── 完整 UI 系统实现
    ├── 存档与数据管理
    └── 多人游戏演示
```

## 本地预览

```bash
cd /Users/niuniu/.openclaw/workspace-main/godot4-csharp-learning
open index.html
```

或在终端运行：
```bash
npm run dev
```

---

**网站已准备就绪，只需创建 GitHub 仓库并推送即可部署！**
