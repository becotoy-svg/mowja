import FeatureGrid from '@/components/FeatureGrid'
import Hero from '@/components/Hero'
import SectionGrid from '@/components/SectionGrid'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-4">
        <div className="flex gap-3">
          <Link
            to="/cardapio"
            className="rounded bg-brand px-4 py-2 font-medium text-white hover:bg-brand-dark"
          >
            Ver cardápio
          </Link>
          <Link to="/admin" className="rounded border px-4 py-2 font-medium hover:bg-gray-50">
            Abrir painel Admin
          </Link>
        </div>
      </section>
      <FeatureGrid />
      <SectionGrid
        id="vantagens"
        title="Vantagens"
        subtitle="Sem comissão, interface amigável e presença no WhatsApp do cliente."
        items={[
          { title: 'Link personalizado', description: 'Endereço único do seu delivery' },
          { title: 'Pedido resumido no WhatsApp', description: 'Receba e acompanhe o status' },
          { title: 'Sem login obrigatório', description: 'Cliente compra com menos fricção' },
          { title: 'Localização multiforme', description: 'Operação em qualquer lugar do país' },
          { title: 'Customer Success', description: 'Mentoria para performar melhor seu delivery' }
        ]}
      />
      <SectionGrid
        id="suporte"
        title="Suporte"
        subtitle="Todos os dias, de 8h às 22h, por email, telefone, WhatsApp e acesso remoto."
        items={[
          { title: 'Suporte diário', description: 'Inclui feriados' },
          { title: 'Suporte premium', description: 'Email, telefone, WhatsApp e TeamViewer' },
          { title: 'Onboarding', description: 'Configuração da loja, cardápio e impressora' },
          { title: 'Gerente de conta', description: 'Relacionamento pessoal dedicado' }
        ]}
      />
      <SectionGrid
        id="cardapio"
        title="Cardápio"
        subtitle="Gestão completa do menu com variações, disponibilidade e fotos."
        items={[
          { title: 'Categorias e descrições', description: 'Organize pratos e detalhes' },
          { title: 'Disponibilidade por horário', description: 'Configure dia e hora por prato' },
          { title: 'Variações e combos', description: 'Borda, acompanhamentos e ofertas' },
          { title: 'Atualização instantânea', description: 'Mudou no painel, atualiza na loja' }
        ]}
      />
      <SectionGrid
        id="clientes"
        title="Gestão de cliente"
        subtitle="Seu banco de clientes, com busca, ordenação e exportação."
        items={[
          { title: 'Lista de clientes', description: 'Recentes, antigos e mais' },
          { title: 'Exportação', description: 'CSV e Excel para uso livre' }
        ]}
      />
      <SectionGrid
        id="impressora"
        title="Impressora"
        subtitle="Imprima pedidos no caixa e na cozinha, com corte automático suportado."
        items={[
          { title: 'Impressão simultânea', description: 'Múltiplas impressoras' },
          { title: 'Corte automático', description: 'Modelos suportados' }
        ]}
      />
      <SectionGrid
        id="infra"
        title="Servidores"
        subtitle="Infraestrutura na nuvem, sem servidor local e sem preocupação com backups."
        items={[
          { title: 'Nuvem confiável', description: 'Plataforma líder de cloud' },
          { title: 'Alta disponibilidade', description: 'Atualizações contínuas' }
        ]}
      />
      <SectionGrid
        id="entregas"
        title="Gestão de entregas"
        subtitle="Atribuição de pedidos, frota e relatórios por entregador."
        items={[
          { title: 'Módulo de entregadores', description: 'Atribua e acompanhe' },
          { title: 'Relatórios', description: 'Desempenho por entregador' }
        ]}
      />
      <SectionGrid
        id="whatsapp"
        title="WhatsApp"
        subtitle="Recepção e status de pedidos direto no WhatsApp do restaurante."
        items={[
          { title: 'Venda pelo WhatsApp', description: 'Sem sair do app' },
          { title: 'Status do pedido', description: 'Atualização para o cliente' }
        ]}
      />
      <SectionGrid
        id="administracao"
        title="Administração da Loja"
        subtitle="Dados, URL personalizada, horários, áreas de entrega e pedido mínimo."
        items={[
          { title: 'Dados completos', description: 'Nome, site, endereço e descrição' },
          { title: 'URL personalizada', description: 'Endereço da sua loja' },
          { title: 'Horários do delivery', description: 'Dia e hora de disponibilidade' },
          { title: 'Área de entrega', description: 'Mapas com valores fixos ou percentuais' },
          { title: 'Pedido mínimo', description: 'Defina valor mínimo' }
        ]}
      />
      <SectionGrid
        id="ofertas"
        title="Ofertas"
        subtitle="Cupons por valor ou percentual com regras e validade."
        items={[
          { title: 'Cupons de desconto', description: 'Valor ou percentual' },
          { title: 'Regras e validade', description: 'Valor mínimo e datas' }
        ]}
      />
      <SectionGrid
        id="financeiro"
        title="Financeiro"
        subtitle="Extratos com lista de compras, valores, datas e pagamento de mensalidade."
        items={[
          { title: 'Extrato detalhado', description: 'Compras e valores' },
          { title: 'Mensalidade', description: 'Pagamento por cartão' }
        ]}
      />
      <SectionGrid
        id="telefone"
        title="Pedidos por telefone"
        subtitle="Receba pedidos diretamente por ligação."
        items={[{ title: 'Central telefônica', description: 'Aceite pedidos por telefone' }]}
      />
      <SectionGrid
        id="agendamento"
        title="Agendamento de pedidos"
        subtitle="Permita que clientes agendem dia e hora para receber."
        items={[
          { title: 'Janela de agendamento', description: 'Controle de dia e hora' },
          { title: 'Fluxo do cliente', description: 'Mais comodidade' }
        ]}
      />
      <SectionGrid
        id="interface"
        title="Interface"
        subtitle="Semelhante às maiores ferramentas de delivery do mercado."
        items={[
          { title: 'Usabilidade', description: 'Fluxos simples e objetivos' },
          { title: 'Performance', description: 'Carregamento rápido' }
        ]}
      />
      <SectionGrid
        id="customizacao"
        title="Design e pagamentos"
        subtitle="Logo, cabeçalho, cores e formas de pagamento aceitas."
        items={[
          { title: 'Design customizado', description: 'Logo, cabeçalho e fundo' },
          { title: 'Formas de pagamento', description: 'Crédito, vale refeição e mais' },
          { title: 'Ligar/Desligar loja', description: 'Dois cliques para operar' }
        ]}
      />
      <SectionGrid
        id="estatisticas"
        title="Estatísticas"
        subtitle="Dashboard com vendas, dados, instalações, mapa de calor e exportação."
        items={[
          { title: 'Dashboard completo', description: 'KPIs e mapa de calor' },
          { title: 'Sugestão de áreas', description: 'Expansão de entrega' },
          { title: 'Exportação', description: 'Dados para Excel' }
        ]}
      />
      <SectionGrid
        id="multiusuario"
        title="Multiusuário"
        subtitle="Controle de acesso com administrador e operador."
        items={[
          { title: 'Usuário administrador', description: 'Configura toda a loja' },
          { title: 'Usuário operador', description: 'Aceita pedidos' }
        ]}
      />
      <SectionGrid
        id="preco"
        title="Preço dinâmico"
        subtitle="Valores por dia e horário da semana."
        items={[{ title: 'Regras de preço', description: 'Configuração por período' }]}
      />
      <SectionGrid
        id="rede"
        title="Redes e Franquias"
        subtitle="Unidades com controle de pedidos, direcionamento e estatísticas por loja."
        items={[
          { title: 'Direcionamento por proximidade', description: 'Cliente vai para a loja próxima' },
          { title: 'Estatísticas por unidade', description: 'Visão granular' },
          { title: 'Controle de acessos', description: 'Permissões por unidade' }
        ]}
      />
      <SectionGrid
        id="pagamento"
        title="Pagamento online"
        subtitle="Integrações com adquirentes líderes do mercado."
        items={[
          { title: 'Checkout online', description: 'Pagamentos seguros' },
          { title: 'Principais adquirentes', description: 'Compatível com o mercado' }
        ]}
      />
      <SectionGrid
        id="praticidade"
        title="Praticidade"
        subtitle="Gerenciador de pedidos, relatórios e impressão simultânea."
        items={[
          { title: 'Operação eficiente', description: 'Fluxos de pedidos ágeis' },
          { title: 'Relatórios de pedidos', description: 'Acompanhamento e análise' }
        ]}
      />
    </>
  )
}
