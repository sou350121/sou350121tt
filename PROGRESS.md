# 网站更新进度日志

## 2025-11-12

### 完成的工作

#### 1. Research部分 - 图片添加与格式统一
- ✅ 为Research最后3篇文章添加图片并统一格式
  - **MoDex**: 添加图片引用 `assets/images/MoDex.JPG` (67KB)，统一alt属性为空字符串
  - **SATac**: 添加图片引用 `assets/images/SATac.JPG` (49KB)，统一alt属性为空字符串
  - **WSTac**: 添加图片引用 `assets/images/WSTac.JPG` (60KB)，统一alt属性为空字符串
  - 统一格式：所有图片使用 `alt=""`，与其他文章保持一致
  - **提交**: `1f6a48d` - 4个文件更改，3行插入，3行删除

#### 2. News部分 - Nano Energy封面图片
- ✅ 添加Nano Energy封面图片展示
  - 图片路径：`assets/images/nano-energy-cover.jpg`
  - 在2024年Nano Energy条目中添加图片展示区域
  - 使用flexbox布局：图片在左侧（最大宽度200px），文字在右侧
  - 添加圆角和阴影样式

#### 3. Hobbies部分 - Blog & Updates (IROS 2025 Hangzhou)
- ✅ 创建IROS 2025 Hangzhou会议照片展示区域
  - **日期**: October 2025
  - **标题**: "🤖 IROS 2025 Hangzhou - Conference Trip with Lab Members"
  - **布局**: 响应式网格布局，使用渐变背景和边框样式
  
- ✅ 添加6张会议照片（共7.1MB）：
  1. **Group photo** (`iros-group-photo.jpg`, 242KB) - "Group photo with lab members at IROS 2025 Hangzhou"
  2. **Collaborator** (`iros-collaborator.jpg`, 6.5MB) - "With collaborator from Guangdong"
  3. **Friend reunion** (`iros-friend.jpg`, 282KB) - "Reunited with friend (Prof. Ding on the left)"
  4. **Hangzhou sky** (`hangzhou-sky.jpg`, 97KB) - "Beautiful sky and moon in Hangzhou"
  5. **Sushiro toy** (`sushiro-toy.jpg`, 167KB) - "Special hidden edition toy from Sushiro!"
  6. **Lunch** (`lunch_friend_HZ.jpg`, 268KB) - "Lunch with good friends"
  
- ✅ 交互功能：
  - 鼠标悬停时显示英文描述文字（渐变背景）
  - 图片放大效果（scale 1.05）
  - 阴影增强效果
  - 图片加载失败时的错误处理
  
- ✅ **提交记录**:
  - `91ded1c` - 添加5张照片和英文描述（60行插入，7行删除）
  - `ab6884b` - 添加日期和午餐照片（8行插入，1行删除）

#### 4. Hobbies部分 - 爱好列表扩展
- ✅ 添加两个新爱好：
  - 📷 **Photography**（攝影）
  - 🎨 **Aesthetic cultivation**（審美培養）
- ✅ 现在Hobbies部分包含6个爱好：
  1. 💪 Regular fitness training
  2. 💰 Financial investment
  3. 🏀 Basketball
  4. 🍽️ Food & Dining
  5. 📷 Photography（新增）
  6. 🎨 Aesthetic cultivation（新增）

#### 5. Experience部分 - Reviewer更新
- ✅ 在Reviewer部分添加ICRA 2026
  - 更新后的列表：
    - ICRA 2026（新增）
    - UbiComp 2024/2025
    - Journal of Mechanical Engineering Science 2025
    - Chemical Engineering Journal

#### 6. Academic部分 - 格式统一
- ✅ 调整Awards部分格式，与News部分保持一致
  - 确保使用相同的HTML结构：`<div class="list-item">` + `<p class="date">` + 内容
  - 保持格式统一性

### Git提交记录（2025-11-12）

| 提交ID | 时间 | 描述 | 文件变更 |
|--------|------|------|----------|
| `1f6a48d` | 22:29 | 为Research最后3篇文章添加图片并统一格式 | 4文件：3图片+index.html |
| `91ded1c` | 22:53 | 添加IROS 2025 Hangzhou会议照片到Blog部分 | 6文件：5图片+index.html |
| `ab6884b` | 23:05 | 添加日期和午餐照片到IROS部分 | 2文件：1图片+index.html |
| `85aa5e5` | 23:09 | 添加摄影和审美培养到Hobbies，添加ICRA 2026 | 1文件：index.html |

### 统计数据

- **新增图片文件**: 9个（共约7.5MB）
  - Research部分：3个（MoDex, SATac, WSTac）
  - News部分：1个（nano-energy-cover）
  - Blog部分：6个（IROS会议照片）
  
- **代码变更**: 
  - `index.html`: 约130行新增/修改
  - 所有更改已推送到GitHub

### 技术细节

- **图片优化**: 使用 `loading="lazy"` 实现懒加载
- **错误处理**: 所有图片添加 `onerror` 处理，加载失败时显示占位文字
- **响应式设计**: Blog照片使用 `grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`
- **交互效果**: CSS hover效果（transform, opacity, box-shadow）
- **格式统一**: Research图片统一使用 `alt=""`，与其他文章保持一致

### 备注

- ✅ 所有更改已推送到GitHub (`origin/main`)
- ✅ 图片文件已上传到 `assets/images/` 目录
- ✅ 网站功能正常，无linter错误
- ✅ 所有图片路径正确，格式统一

---

**状态**: ✅ 今日工作完成，休息

**下次计划**: 
- 可考虑优化图片大小（特别是6.5MB的collaborator照片）
- 可考虑添加图片压缩或WebP格式支持
