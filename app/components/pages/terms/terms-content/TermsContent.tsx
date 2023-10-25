import * as styles from '@components/pages/terms/terms-content/TermsContent.style';
import Check from '@assets/icons/common/TermsCheckBox.svg';
import MarginTop from '@components/common/MarginTop';

const TermsContent = () => {
  return (
    <styles.Box>
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제 1조 목적</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            본 약관은 “든붕이”의 서비스 이용 조건과 운영에 관한 제반 사향 규정을
            목적으로 합니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제 2조 용어의 정의</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.{'\n'}
            1. 회원: 든붕이의 약관에 동의하고 개인정보를 제공하여 회원 등록을 한
            자로서, 든붕이의 이용 계약을 체결하고 든붕이를 이용하는 사용자를
            말합니다.{'\n'}
            2. 이용자: 서비스를 이용하는 모든 사람을 말합니다.{'\n'}
            3. 운영자: 든붕이의 총책임자를 말합니다.{'\n'}
            4. 든붕이: 소비자가 상품을 구매할 때 발생할 수 있는 대기 시간을
            효율적으로 관리하고 장소에 구애받지 않고 제품을 구매할 수 있도록
            만들어진 전자상거래 서비스를 말합니다.{'\n'}
            5. 구매자: 든붕이을 이용해 상품을 결제 및 구매한 자를 말합니다.
            {'\n'}
            6. 이용 계약: 서비스 이용과 관련하여 든붕이과 회원 간에 체결을 하는
            계약을 말합니다.{'\n'}
            7. 회원 아이디(이하 “회원 전화번호”): 회원의 식별과 회원의 원활한
            서비스 이용을 위하여 회원별 등록하는 본인의 전화번호를 뜻합니다.
            {'\n'}
            8. 비밀번호: 회원이 등록한 ID와 일치된 회원임을 확인하고 회원의 권익
            보호를 위하여 회원이 선정한 문자와 숫자 조합을 말합니다.{'\n'}
            9. 운영자: 서비스를 운영하는 운영자를 말합니다.{'\n'}
            10. 탈퇴: 회원이 이용 계약을 해지하는 것을 말합니다.{'\n'}
            11. 블랙리스트: 제11조 각 항에 해당되거나 가게 운영에 피해를 입힐 시
            서비스 사용 제한을 받는 이용자를 말합니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제3조 약관 외 준칙</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            운영자는 필요한 경우 별도의 운영 정책을 공지 안내할 수 있으며, 본
            약관과 운영 정책이 중첩될 경우 운영 정책이 우선 적용됩니다.{'\n'}본
            약관은 그 내용을 운영자가 서비스에 게시하고, 회원이 서비스 가입 시
            본 약관에 동의함으로써 그 효력이 발생합니다.{'\n'}
            약관을 변경할 경우의 방안은 다음과 같습니다.{'\n'}- 관리자는 본
            약관을 변경할 수 있으며 약관을 개정할 경우에는 적용 일자 및 개정
            사유를 명시하여 약관 페이지에 그 적용일의 7일 전부터 공시하는
            방식으로 회원에게 고지합니다. 다만, 회원에게 불리한 내용으로 약관을
            개정하는 경우에는 적용일로부터 30일 전까지 약관 페이지에 공시하고
            회원이 가입할 때 입력한 전화번호로 전송하는 방법으로 회원에게
            고지합니다.{'\n'} - 변경된 약관은 공시하거나 고지한 적용일로부터
            효력이 발생합니다.{'\n'} - 회원이 변경된 약관 사항에 동의하지 않을
            경우, 약관의 효력 발생 전일까지 서비스 이용을 중단하거나 회원 탈퇴를
            할 수 있으며, 약관의 개정과 관련하여 효력 발생일 전일까지 이의를
            제기하지 않는 경우에는 개정된 약관에 동의한 것으로 간주합니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제4조 이용 계약 체결</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 이용 계약은 회원으로 등록하여 서비스를 이용하려는 자의 본 약관
            내용에 대한 동의와 가입 신청에 대하여 운영자의 이용 승낙으로
            성립합니다.{'\n'} 2. 회원으로 등록하여 서비스를 이용하려는 자는 가입
            신청 시 본 약관을 읽고 “회원가입 버튼”을 선택하는 것으로 본 약관에
            대한 동의 의사 표시를 합니다.{'\n'} 3. 회원 가입은 무료입니다.{'\n'}{' '}
            4. 회원 ID (계정)는 1인당 1개의 ID만 생성 및 등록이 가능하며, ID
            생성을 위해 필요한 개인정보를 허위로 제공하거나, 본인이 아닌 타인의
            정보를 무단으로 사용하여 회원 ID를 만들 수 없습니다. 이를 위반할
            경우, 회원에게 제공되는 서비스의 제한이 있을 수 있으며, 본 약관 각
            조항에서 정하고 있는 불이익을 받을 수 있습니다.{'\n'} 5. 회원에게
            부여된 회원 번호 (ID) 및 비밀번호의 관리 소홀, 부정 사용에 의하여
            발생하는 모든 결과에 대한 책임은 회원에게 있습니다.{'\n'} 6. 회원
            자신의 ID가 부정하게 사용된 경우 해당 회원은 반드시 회사에게 그
            사실을 지체 없이 통보하여 조치를 받아야 하며, 통보의 지연으로 인해
            발생하는 손해는 관리자가 책임을 지지 않습니다.{'\n'} 7. 이용자는
            회원가입 시 기재하는 이름을 포함한 모든 정보에 사실에 기초한 정보를
            기재하여야 합니다. 실명이나 실제 정보를 입력하지 않은 회원은
            법적으로 보호받을 수 없으며 회사로부터 서비스 이용 제한 등의 조치를
            받을 수 있습니다.{'\n'} 8. 푸쉬 알림 (배너) 미확인 혹은 알림
            미설정으로 인한 불이익은 가게에서 책임지지 않습니다. 이에 대한
            동의를 하지 않을 시 서비스를 이용할 수 없습니다.{'\n'} 9. 본 약관에
            별도 규정이 없는 한 회사는 회원이 제공한 (휴대) 전화번호, 서비스
            로그인 시 약관 동의창, 서비스 연결화면, 알림 팝업 등의 전자적
            전송매체를 통하여 회원에서 통지할 수 있습니다.{'\n'} 10. 회원이
            회사의 통지를 확인하지 않거나 회사에 통지가 불가능한 정보(전자우편
            서비스 제공사의 제한 포함) 또는 허위 정보 제공에 의해 개별 통지가
            불가하여 발생하는 모든 문제에 대해서 회사는 책임을 지지 않습니다.
            {'\n'} 11. 본인 인증 서비스 {'\n'}- 운영자는 전기통신사업법
            제84조의2에 따라 발신 번호의 변조 방지를 위해 번호 인증을 통한
            발신번호 사전등록서비스 제공 및 운영합니다.{'\n'} - 운영자는
            이용자의 회원가입 시 타인의 명의를 도용한 부정 가입을 방지하기 위해
            든붕이가 제공하는 인증 방법을 통해 본인인증 서비스를 제공 및
            운영합니다.{'\n'} - 운영자는 회원을 보호하기 위하여 보안 및
            인증수단을 회사 보안정책에 따라 시행 및 변경할 수 있습니다.{'\n'} -
            본인 인증 서비스에 대한 동의 거부 시, 회원 가입이 불가하며 든붕이
            서비스를 이용할 수 없습니다. {'\n'}12. 휴면계정 관리 든붕이는 회원이
            5년 이상 로그인하지 않으면, 휴면 계정으로 간주하고, 계정을 자동
            삭제할 수 있습니다. 이 경우에는 회원의 개인정보가 자동으로
            삭제됩니다.{'\n'} 13. 회원 탈퇴 회원 탈퇴를 희망하는 경우, “MY
            페이지”에서 “회원 탈퇴” 버튼을 사용하여 탈퇴 신청을 합니다. 탈퇴
            신청 시 기존 회원의 정보는 자동으로 삭제됩니다. {'\n'}14. 블랙리스트
            가게에 위해를 입혔거나 제공되는 서비스를 악용할 시 관리자 혹은
            운영자는 이용자를 블랙리스트로 등재하여 이용자의 서비스 사용을 막을
            수 있습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제5조 서비스 이용 신청</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 회원으로 등록하여 서비스를 이용하려는 이용자는 서비스에서
            요청하는 제반 정보(이용자 ID, 비밀번호, 본인 이름 등)를 제공해야
            합니다.{'\n'} 2. 타인의 정보를 도용하거나 허위의 정보를 등록하는 등
            본인의 진정한 정보를 등록하지 않은 회원은 서비스 이용과 관련하여
            아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수
            있습니다.{'\n'} 3. 관리자는 회원이 입력한 개인 정보를 확인하고 위
            정보가 운영에 필요한 경우, 이를 확인 또는 활용할 수 있습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제6조 개인정보처리방침</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            든붕이 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고
            있지 않으며, 이와 관련된 부분은 든붕이의 개인정보 처리 방침을
            따릅니다. 운영자는 관계 법령이 정하는 바에 따라 회원 등록 정보를
            포함한 회원의 개인정보를 보호하기 위하여 노력합니다. 회원의 개인정보
            보호에 관하여 관계 법령 및 든붕이가 정한 개인정보 처리 방침을
            따릅니다.{'\n'}
            {'\n'} 단, 회원의 귀책 사유로 인해 노출된 정보에 대해 운영자는
            일체의 책임을 지지 않습니다. 운영자는 회원이 미풍양속에 저해되거나
            법적으로 문제 되는 행위를 할 경우 관련 기관의 요청이 있을 시 회원의
            자료 열람 및 해당 자료를 관련 기관에 제출할 수 있습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제7조 운영자의 의무</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 운영자는 이용 회원으로부터 제기되는 의견이나 불만이 정당하다고
            인정할 경우에 가급적 빨리 문제를 처리할 의무가 있습니다. 다만,
            개인적인 사정으로 신속한 처리가 곤란한 경우에는 사후에 공지 또는
            이용 회원에게 쪽지, 전자 우편 등을 보내는 최선을 다합니다.{'\n'} 2.
            운영자는 계속적이고 안정적인 서비스 제공을 위하여 서비스에 장애가
            생기거나 유실된 때에 이를 지체 없이 수리 또는 복구할 수 있도록
            노력합니다. 다만, 천재지변 또는 든붕이에 부득이한 사유가 있는 경우,
            서비스 운영을 일시 정지할 수 있습니다.{'\n'} 3. 운영자는 든붕이
            회원의 지적재산권을 침해하거나 악용해서는 안됩니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제8조 회원의 의무</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지
            사항 및 운영 정책 등 든붕이가 공지하는 사항 및 관계 법령을
            준수하여야 하며, 기타 든붕이의 업무에 방해가 되는 행위, 든붕이의
            명예를 손상시키는 행위를 해서는 안 됩니다.{'\n'} 2. 회원은 든붕이의
            명시적 동의가 없는 한 서비스의 이용 권한, 기타 이용 계약 상 지위를
            타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
            {'\n'} 3. 이용 고객은 아이디 및 비밀번호 관리에 상당한 주의를
            기울여야 하며, 운영자나 든붕이의 동의 없이 제 3자에게 아이디를
            제공하여 이용하게 할 수 없습니다.{'\n'} 4. 회원은 운영자와 든붕이 및
            제 3자의 지적재산권을 침해해서는 안 됩니다.{'\n'} 5. 회원은 든붕이가
            제공하는 서비스를 악용해서는 안 됩니다.{'\n'} 6. 결제 및 주문 취소는
            다음과 같은 정책을 따릅니다.{'\n'} - 든붕이 내 판매 제품 등의 주문
            요청에 대하여 판매자가 주문을 승인함으로써 판매자와 회원 사이에 판매
            제품에 대한 매매 계약이 성립합니다.{'\n'} - 회원은 구매 시 결제
            수단을 사용함에 있어 반드시 본인 명의의 결제 수단을 사용하여야 하며,
            타인의 결제 수단을 임의로 사용하여서는 안 됩니다. 타인의 결제 수단을
            임의 사용함으로써 발생하는 모든 문제 사항과 손해에 대한 책임은
            회원에게 있습니다.{'\n'} - 회원이 결제 및 주문 전송 이후 제품을
            수령하지 않을 경우 또는 안내한 수령 알림으로부터 30분 이내 방문하지
            않을 경우 자동으로 주문이 취소되며, 이로 인하여 회원에게 발생하는
            손해에 대하여 운영자는 책임을 지지 않습니다. 회원에게 귀책사유가
            있을 시 발생하는 모든 금전적 피해는 회원에게 위임됩니다.{'\n'} -
            판매자가 주문을 접수하였을 시 회원은 어떤 이유에서든 구매자는 주문을
            취소할 수 없으며 이로 인해 발생한 모든 피해는 회원에게 위임됩니다.
            주문 취소를 원할 시 판매자가 주문을 접수하기 전에 취소하는 방법이
            존재합니다.{'\n'} - 타 주문 관련 문의는 가게로 방문하시길 바랍니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제9조 서비스 이용 시간</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 서비스 이용 시간은 업무 상 또는 기술 상 특별한 지장이 없는 한
            연중 휴무 1일 24시간을 원칙으로 합니다. 단, 든붕이는 시스템 정기
            점검, 증설 및 교체를 위해 든붕이가 정한 날이나 시간에 서비스를 일시
            중단할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은 사전에
            공지하오니 수시로 참고하시길 바랍니다.{'\n'} 2. 단, 든붕이는 다음
            경우에 대하여 사전 공지나 예고 없이 서비스를 일시적 혹은 영구적으로
            중단할 수 있습니다.{'\n'} - 긴급한 시스템 점검, 증설, 교체, 고장
            혹은 오동작을 일으킬 경우{'\n'} - 국가비상사태, 정전, 천재지변 등을
            불가항력적인 사유가 있는 경우{'\n'} - 전기통산사업법에 규정된
            기간통신 사업자가 전기통신 서비스를 중지한 경우{'\n'} - 서비스 이용
            폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우{'\n'} - 제품
            부족으로 인해 조기 품절이 발생한 경우{'\n'} - 운영자가 정당한 사유를
            가지고 영업을 종료할 경우{'\n'} 3. 전항에 의한 서비스 중단의 경우
            든붕이는 사전에 공지사항 등을 통하여 회원에게 통지합니다. 단,
            든붕이가 통제할 수 없는 사유로 발생한 서비스 중단에 대하여 사전
            공지가 불가능한 경우에는 사후 공지로 대신합니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제10조 서비스 이용 해지</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 회원이 든붕이와의 이용 계약을 해지하고자 하는 경우에는 회원
            본인이 온라인을 통하여 등록 해지 신청을 하여야 합니다.{'\n'} 2.
            해지와 동시에 든붕이와 관련된 회원 정보가 자동적으로 삭제됨으로
            운영자는 더 이상 해지 신청자의 정보를 볼 수 없습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제11조 서비스 이용 제한</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            회원은 다음 각 호에 해당하는 행위를 하여서는 아니 되며 해당 행위를
            한 경우, 든붕이는 회원의 서비스 이용 제한 및 적법한 조치를 취할 수
            있으며 이용 계약을 해지하거나 이용자를 블랙리스트로 등재하여
            서비스를 중지할 수 있습니다.{'\n'} 1. 회원 가입 시 허위 내용을
            등록하는 행위{'\n'} 2. 타인의 서비스 이용을 방해하거나 정보를
            도용하는 행위{'\n'} 3. 든붕이의 운영진, 직원 또는 관계자를 사칭하는
            행위{'\n'} 4. 든붕이의 ID를 부정하게 사용하는 행위{'\n'} 5. 다른
            회원에 대한 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위{'\n'}{' '}
            6. 범죄와 결부된다고 객관적으로 판단되는 행위{'\n'} 7. 기타 관련
            법령에 위배되는 행위
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제12조 서비스 이용 관리</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            든붕이의 주문 내역 관리 및 운영의 책임은 운영자에게 있습니다.
            운영자는 항상 주문 내역 및 자료에 대하여 모니터링을 할 의무가
            있습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제13조 서비스 정보의 보관</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            든붕이는 운영자가 불가피한 사정으로 본 든붕이를 중단하게 될 경우,
            회원에게 사전 공지를 할 의무가 있으며, 이용자별 주문내역 정보를 보관
            및 활용할 수 있습니다. 단, 이용자의 개인정보는 어떠한 이유에서도
            유출하면 안 됩니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제14조 서비스에 대한 권리</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 든붕이의 서비스에 포함된 자료 및 디자인은 이용자에게 정보 제공을
            위한 목적 및 서비스 품질 개선을 위한 목적으로만 쓰입니다.{'\n'} 2.
            이용자는 본 서비스 내용 및 디자인에 대하여 어떤 방법으로도 배포,
            출판, 전송, 변경, 전시, 모방 작품의 창조 혹은 개발할 수 없습니다.
            이용자는 회사의 권한을 보호하여야 하고, 본 서비스의 자료를 허가 없이
            유용할 수 없습니다. 허가 없이 본 서비스 내용을 유용하는 경우에
            운영자 및 관리자는 이용자에게 법적, 재정적으로 가능한 기타 추가적인
            배상을 청구할 수 있습니다.{'\n'} 3. 운영자는 제8조 각 호에 해당되는
            이용자는 관리자 권한을 통해 블랙리스트로 선정할 수 있습니다. 정당한
            사유로 블랙리스트로 선정된 회원은 서비스 이용이 불가합니다.{'\n'} 4.
            이용자의 모든 정보에 대한 책임은 전적으로 이용자에게 있습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제15조 손해배상</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 본 서비스에서 발생한 모든 민, 형법상 책임은 회원 본인에게
            1차적으로 있습니다.{'\n'} 2. 본 서비스로부터 회원이 받은 손해가
            천재지변 등 불가항력적이거나 회원의 고의 또는 과실로 인하여 발생한
            때에는 손해배상을 하지 않습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
      <MarginTop height={18} />
      <styles.ContentContainer>
        <styles.TitleContainer>
          <styles.ImageBox>
            <Check width={11} height={18} />
          </styles.ImageBox>
          <styles.TitleBox>
            <styles.Title>제16조 면책</styles.Title>
          </styles.TitleBox>
        </styles.TitleContainer>
        <MarginTop height={9} />
        <styles.ContentBox>
          <styles.Content>
            1. 운영자는 회원이 든붕이의 서비스 제공으로부터 기대되는 이익을 얻지
            못했을 경우 발생하는 손해를 책임질 의무가 있습니다. 단, 귀책사유가
            회원에게 있을 경우 책임이 면책됩니다.{'\n'} 2. 운영자는 본 서비스
            기반 및 타 통신업자가 제공하는 전기통신서비스 장애로 인한 경우에는
            책임이 면제되며 본 서비스 기반과 관련되어 발생한 손해에 대해서는
            서비스의 이용 약관에 준합니다.{'\n'} 3. 조기 마감으로 인한 서비스
            이용 불가에 대한 상황은 불가피한 개인 사정으로 판단되어 서비스 조기
            중단 책임지지 아니합니다.{'\n'} 4. 운영자는 회원의 잘못으로 인한
            제품 수령 불가 문제에 대해 책임지지 아니합니다.{'\n'} 5. 운영자는
            회원의 귀책사유로 인하여 서비스 이용의 장애가 발생한 경우에는
            책임지지 아니합니다.{'\n'} 6. 운영자는 회원 간 또는 회원과 제 3자
            간에 발생한 일체의 분쟁에 대하여 책임지지 아니합니다.{'\n'} 7.
            운영자는 서버 등 설비의 관리, 점검, 보수, 교체 과정 또는
            소프트웨어의 운용 과정에서 고의 또는 고의에 준수하는 중대한 과실
            없이 발생할 수 있는 시스템의 장애, 국내 외의 저명한 연구 기관이나
            보안 관련 업체에 의해 대응 방법이 개발되지 아니한 컴퓨터 바이러스
            등의 유포나 기타 운영자가 통제할 수 없는 불가항력적 사유로 인한
            회원의 손해에 대하여 책임지지 않습니다.
          </styles.Content>
        </styles.ContentBox>
        <MarginTop height={18} />
      </styles.ContentContainer>
    </styles.Box>
  );
};

export default TermsContent;
