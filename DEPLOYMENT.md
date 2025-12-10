# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Free)

1. **Sign up at [Vercel](https://vercel.com)**

2. **Import your GitHub repository:**
   - Click "New Project"
   - Import `ujjwalraj0056-lgtm/indian-antiques-auction`
   - Vercel auto-detects Next.js

3. **Add Environment Variables:**
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. **Deploy!** - Takes 2-3 minutes

**Your live URL:** `https://indian-antiques-auction.vercel.app`

---

### Option 2: Railway (Alternative)

1. **Sign up at [Railway](https://railway.app)**

2. **New Project → Deploy from GitHub**
   - Select `ujjwalraj0056-lgtm/indian-antiques-auction`

3. **Add environment variables** (same as above)

4. **Deploy!**

---

### Option 3: Netlify

1. **Sign up at [Netlify](https://netlify.com)**

2. **Import from GitHub**

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Add environment variables**

---

## 🗄️ Database Setup (MongoDB)

### Free MongoDB Atlas:

1. **Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**

2. **Create free cluster** (M0 - Free tier)

3. **Create database user:**
   - Username: `antiqueadmin`
   - Password: (generate strong password)

4. **Whitelist IP:** `0.0.0.0/0` (allow all)

5. **Get connection string:**
   ```
   mongodb+srv://antiqueadmin:<password>@cluster0.xxxxx.mongodb.net/antiques?retryWrites=true&w=majority
   ```

6. **Add to environment variables as `MONGODB_URI`**

---

## 💳 Payment Setup (Razorpay)

1. **Sign up at [Razorpay](https://razorpay.com)**

2. **Get API Keys:**
   - Dashboard → Settings → API Keys
   - Generate Test Keys (for development)
   - Generate Live Keys (for production)

3. **Add to environment variables:**
   ```
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   ```

---

## 📸 Image Upload Setup (Cloudinary)

1. **Sign up at [Cloudinary](https://cloudinary.com)**

2. **Get credentials from Dashboard:**
   - Cloud Name
   - API Key
   - API Secret

3. **Add to environment variables**

---

## 🔐 JWT Secret

Generate a random secret key:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add as `JWT_SECRET` in environment variables.

---

## ✅ Post-Deployment Checklist

- [ ] MongoDB connected successfully
- [ ] User registration working
- [ ] User login working
- [ ] Product listing visible
- [ ] Image upload working
- [ ] Razorpay test payment working
- [ ] Auction bidding functional

---

## 🌐 Custom Domain (Optional)

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `antiquesbazaar.com`)
3. Update DNS records as instructed

### On Railway:
1. Project Settings → Domains
2. Add custom domain
3. Update DNS CNAME record

---

## 📱 Mobile App (Future)

The codebase is ready for React Native conversion:
- API routes are mobile-ready
- Authentication works cross-platform
- Payment integration supports mobile

---

## 🆘 Troubleshooting

**Build fails?**
- Check all environment variables are set
- Ensure MongoDB URI is correct
- Verify Node.js version (use 18.x or higher)

**Database connection error?**
- Whitelist IP `0.0.0.0/0` in MongoDB Atlas
- Check connection string format
- Verify database user credentials

**Payment not working?**
- Use Razorpay test keys for development
- Check Razorpay dashboard for webhook logs
- Verify key_id and key_secret are correct

---

## 📞 Support

Need help? Contact: ujjwalraj0056@gmail.com

---

**🎉 Your platform is ready to launch!**