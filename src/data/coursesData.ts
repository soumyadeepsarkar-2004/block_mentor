export interface CourseProps {
    id: string;
    title: string;
    description: string;
    image: string;
    duration: string;
    students: number;
    rating: number;
    level: string;
    price: number;
    tutor: {
        name: string;
        avatar: string;
    };
}

export const coursesData: CourseProps[] = [
    {
        id: "1",
        title: "Blockchain Fundamentals",
        description: "A comprehensive introduction to blockchain technology, cryptocurrencies, and decentralized applications. Learn the core concepts that power the blockchain revolution.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        duration: "4 weeks",
        students: 1240,
        rating: 4.8,
        level: "Beginner",
        price: 299,
        tutor: {
            name: "Dr. Sarah Johnson",
            avatar: "https://i.pravatar.cc/150?img=3",
        },
    },
    {
        id: "2",
        title: "Advanced Smart Contract Development",
        description: "Take your smart contract skills to the next level. Learn advanced Solidity patterns, security best practices, and how to build complex decentralized applications.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1832&q=80",
        duration: "6 weeks",
        students: 870,
        rating: 4.9,
        level: "Intermediate",
        price: 399,
        tutor: {
            name: "Michael Chen",
            avatar: "https://i.pravatar.cc/150?img=5",
        },
    },
    {
        id: "3",
        title: "DeFi: Decentralized Finance Explained",
        description: "Explore the revolutionary world of DeFi applications, protocols, and investment strategies.",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        duration: "7 hours",
        students: 1456,
        rating: 4.7,
        level: "Intermediate",
        price: 69.99,
        tutor: {
            name: "James Wilson",
            avatar: "https://i.pravatar.cc/150?img=8",
        },
    },
    {
        id: "4",
        title: "NFTs: Creation to Marketplace",
        description: "Master the process of creating, minting, and selling NFTs across multiple blockchain platforms.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
        duration: "5 hours",
        students: 2310,
        rating: 4.8,
        level: "All Levels",
        price: 64.99,
        tutor: {
            name: "Emily Parker",
            avatar: "https://i.pravatar.cc/150?img=9",
        },
    },
    {
        id: "5",
        title: "Advanced Blockchain Security",
        description: "Protect your blockchain applications with advanced security techniques and vulnerability prevention.",
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
        duration: "9 hours",
        students: 986,
        rating: 4.9,
        level: "Advanced",
        price: 89.99,
        tutor: {
            name: "David Kim",
            avatar: "https://i.pravatar.cc/150?img=12",
        },
    },
    {
        id: "6",
        title: "Web3 Development Fundamentals",
        description: "Build decentralized applications (dApps) with modern Web3 frameworks and blockchain integration.",
        image: "https://images.unsplash.com/photo-1655720828018-7461cfa2d2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        duration: "10 hours",
        students: 1645,
        rating: 4.7,
        level: "Intermediate",
        price: 79.99,
        tutor: {
            name: "Michael Johnson",
            avatar: "https://i.pravatar.cc/150?img=15",
        },
    },
];
