"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Bell,
  Search,
  Settings,
  LogOut,
  Mail,
  Activity,
  ShoppingCart,
  Eye,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  User,
  Home,
  FileText,
  PieChart,
  Menu,
} from "lucide-react"

function StatCard({ title, value, change, changeType, icon, color }) {
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-bold text-card-foreground">{value}</p>
          <div className="flex items-center mt-3">
            {changeType === "positive" ? (
              <ArrowUpRight className="w-4 h-4 text-primary mr-1" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-destructive mr-1" />
            )}
            <span className={`text-sm font-medium ${changeType === "positive" ? "text-primary" : "text-destructive"}`}>
              {change}
            </span>
            <span className="text-sm text-muted-foreground ml-1">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>{icon}</div>
      </div>
    </div>
  )
}

function ActivityItem({ user, action, time, avatar }) {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors duration-200">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
        {avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-card-foreground truncate">
          <span className="font-semibold">{user}</span> {action}
        </p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      changeType: "positive",
      icon: <DollarSign className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.3%",
      changeType: "positive",
      icon: <Users className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary",
    },
    {
      title: "Orders",
      value: "1,234",
      change: "-2.4%",
      changeType: "negative",
      icon: <ShoppingCart className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary",
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "+8.2%",
      changeType: "positive",
      icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />,
      color: "bg-primary",
    },
  ]

  const recentActivities = [
    { user: "John Doe", action: "completed a purchase", time: "2 minutes ago", avatar: "JD" },
    { user: "Sarah Wilson", action: "updated their profile", time: "5 minutes ago", avatar: "SW" },
    { user: "Mike Johnson", action: "left a review", time: "10 minutes ago", avatar: "MJ" },
    { user: "Emily Davis", action: "subscribed to premium", time: "15 minutes ago", avatar: "ED" },
    { user: "Alex Brown", action: "shared a post", time: "20 minutes ago", avatar: "AB" },
  ]

  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", active: true },
    { icon: <Users className="w-5 h-5" />, label: "Users", active: false },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", active: false },
    { icon: <ShoppingCart className="w-5 h-5" />, label: "Orders", active: false },
    { icon: <FileText className="w-5 h-5" />, label: "Reports", active: false },
    { icon: <Settings className="w-5 h-5" />, label: "Settings", active: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-sidebar shadow-lg border-r border-sidebar-border transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-primary">
          <h1 className="text-xl font-bold text-primary-foreground">Dashboard</h1>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                    item.active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3 font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center px-4 py-3 text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive rounded-lg transition-all duration-200">
            <LogOut className="w-5 h-5" />
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        <header className="bg-card shadow-sm border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-2xl font-bold text-foreground">Welcome back, John!</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Here's what's happening with your business today.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-80 xl:w-96 pl-10 pr-3 py-2 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Chart Placeholder */}
            <div className="xl:col-span-2 bg-card rounded-lg shadow-sm border border-border p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-card-foreground">Revenue Overview</h3>
                <button className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Chart visualization would go here</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card rounded-lg shadow-sm border border-border p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-card-foreground">Recent Activity</h3>
                <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200">
                  View all
                </button>
              </div>
              <div className="space-y-1">
                {recentActivities.map((activity, index) => (
                  <ActivityItem key={index} {...activity} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">New Users</h4>
                  <p className="text-3xl font-bold text-card-foreground">+127</p>
                </div>
                <div className="p-3 bg-primary rounded-lg">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Page Views</h4>
                  <p className="text-3xl font-bold text-card-foreground">8,549</p>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <Eye className="w-7 h-7 text-secondary-foreground" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Conversion</h4>
                  <p className="text-3xl font-bold text-card-foreground">3.2%</p>
                </div>
                <div className="p-3 bg-accent rounded-lg">
                  <Activity className="w-7 h-7 text-accent-foreground" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm border border-border p-6 hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Messages</h4>
                  <p className="text-3xl font-bold text-card-foreground">24</p>
                </div>
                <div className="p-3 bg-primary rounded-lg">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
