import { defineEventHandler, getQuery } from 'h3';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const searchTerm = String(query.q || '');

    try {
        if (!searchTerm) {
            return await prisma.member.findMany();
        }

        return await prisma.member.findMany({
            where: {
                OR: [
                    { firstName: { contains: searchTerm, mode: 'insensitive' } },
                    { lastName: { contains: searchTerm, mode: 'insensitive' } },
                    { email: { contains: searchTerm, mode: 'insensitive' } },
                ]
            }
        });
    } catch (error) {
        console.error('Error fetching members:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch members. Please check database configuration.'
        });
    }
});
