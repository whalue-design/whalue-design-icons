// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HistoryOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HistoryOutlined';

export default {
  name: 'IconHistoryOutlined',
  displayName: 'HistoryOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HistoryOutlinedSvg } },
      children,
    ),
};