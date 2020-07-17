// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TeamOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TeamOutlined';

export default {
  name: 'IconTeamOutlined',
  displayName: 'TeamOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TeamOutlinedSvg } },
      children,
    ),
};